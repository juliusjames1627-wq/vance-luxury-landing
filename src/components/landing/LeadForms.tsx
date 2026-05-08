import { useEffect, useState, type ComponentProps } from "react";
import { useForm, type FieldValues, type Path, type UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitLead } from "@/lib/submit-lead";

const baseShape = {
  fullName: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Invalid phone").max(30),
  notes: z.string().trim().max(2000).optional().or(z.literal("")),
  website: z.string().max(0, "spam"),
};

const sellerSchema = z.object({
  ...baseShape,
  address: z.string().trim().min(1, "Address required").max(200),
  city: z.string().trim().max(80).optional().or(z.literal("")),
  beds: z.string().trim().max(10).optional().or(z.literal("")),
  baths: z.string().trim().max(10).optional().or(z.literal("")),
  sqft: z.string().trim().max(15).optional().or(z.literal("")),
  timeline: z.string().trim().max(50).optional().or(z.literal("")),
});

const buyerSchema = z.object({
  ...baseShape,
  area: z.string().trim().max(120).optional().or(z.literal("")),
  priceRange: z.string().trim().max(60).optional().or(z.literal("")),
  beds: z.string().trim().max(10).optional().or(z.literal("")),
  timeline: z.string().trim().max(50).optional().or(z.literal("")),
});

type SellerValues = z.infer<typeof sellerSchema>;
type BuyerValues = z.infer<typeof buyerSchema>;
type Mode = "seller" | "buyer";

const sellerDefaults: SellerValues = {
  fullName: "",
  email: "",
  phone: "",
  notes: "",
  website: "",
  address: "",
  city: "",
  beds: "",
  baths: "",
  sqft: "",
  timeline: "",
};

const buyerDefaults: BuyerValues = {
  fullName: "",
  email: "",
  phone: "",
  notes: "",
  website: "",
  area: "",
  priceRange: "",
  beds: "",
  timeline: "",
};

export function LeadForms() {
  const [mode, setMode] = useState<Mode>("seller");

  return (
    <section id="valuation" className="py-20 md:py-28 border-t border-border">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-[11px] tracking-[0.3em] text-primary uppercase mb-3">
            05 — Start the Conversation
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Tell us about your move.
          </h2>
          <p className="mt-4 text-foreground/65">
            Whether you're listing or looking, you'll hear back from Elena personally — typically
            within one business day.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-card border border-border rounded-sm">
            {(["seller", "buyer"] as Mode[]).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                className={`px-6 py-2 text-xs tracking-[0.2em] uppercase rounded-sm transition-colors ${
                  mode === m
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/65 hover:text-foreground"
                }`}
              >
                {m === "seller" ? "I'm Selling" : "I'm Buying"}
              </button>
            ))}
          </div>
        </div>

        {mode === "seller" ? <SellerForm /> : <BuyerForm />}
      </div>
    </section>
  );
}

function SellerForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SellerValues>({
    resolver: zodResolver(sellerSchema),
    defaultValues: sellerDefaults,
  });

  useEffect(() => {
    const prefill = sessionStorage.getItem("ev:prefill-address");
    if (prefill) {
      setValue("address", prefill);
      sessionStorage.removeItem("ev:prefill-address");
    }
  }, [setValue]);

  async function onSubmit(values: SellerValues) {
    const { website: _h, ...clean } = values;
    const result = await submitLead({ leadType: "seller", ...clean });
    if (!result.ok) {
      toast.error(result.error || "Something went wrong. Please try again.");
      return;
    }
    toast.success("Valuation request received. Elena will be in touch shortly.");
    reset(sellerDefaults);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-card border border-border rounded-sm p-6 md:p-9 relative"
      noValidate
    >
      <h3 className="font-display text-2xl text-foreground mb-1">Get Your Free Home Valuation</h3>
      <p className="text-sm text-foreground/55 mb-6">For sellers — no obligation.</p>
      <Honeypot<SellerValues> register={register} />
      <div className="grid sm:grid-cols-2 gap-4">
        <Field
          id="s-fullName"
          label="Full Name"
          required
          error={errors.fullName?.message}
          inputProps={register("fullName")}
        />
        <Field
          id="s-email"
          label="Email"
          required
          error={errors.email?.message}
          inputProps={register("email")}
          type="email"
        />
        <Field
          id="s-phone"
          label="Phone"
          required
          error={errors.phone?.message}
          inputProps={{ ...register("phone"), inputMode: "tel", autoComplete: "tel" }}
          type="tel"
        />
        <Field
          id="s-city"
          label="City"
          error={errors.city?.message}
          inputProps={{ ...register("city"), autoComplete: "address-level2" }}
        />
        <div className="sm:col-span-2">
          <Field
            id="s-address"
            label="Property Address"
            required
            error={errors.address?.message}
            inputProps={{ ...register("address"), autoComplete: "street-address" }}
          />
        </div>
        <Field
          id="s-beds"
          label="Beds"
          error={errors.beds?.message}
          inputProps={{ ...register("beds"), inputMode: "numeric" }}
        />
        <Field
          id="s-baths"
          label="Baths"
          error={errors.baths?.message}
          inputProps={{ ...register("baths"), inputMode: "numeric" }}
        />
        <Field
          id="s-sqft"
          label="Approx. SqFt"
          error={errors.sqft?.message}
          inputProps={{ ...register("sqft"), inputMode: "numeric" }}
        />
        <SelectField<SellerValues>
          id="s-timeline"
          name="timeline"
          label="Timeline"
          register={register}
          error={errors.timeline?.message}
          options={["Just exploring", "0–3 months", "3–6 months", "6–12 months", "12+ months"]}
        />
        <div className="sm:col-span-2">
          <Label htmlFor="s-notes" className="text-foreground/75 text-xs tracking-wider uppercase">
            Notes
          </Label>
          <Textarea id="s-notes" rows={3} className="mt-2" {...register("notes")} />
          {errors.notes?.message ? (
            <p className="text-sm text-destructive mt-1">{errors.notes.message}</p>
          ) : null}
        </div>
      </div>
      <Button type="submit" className="w-full mt-7 h-12" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Request Valuation"}
      </Button>
    </form>
  );
}

function BuyerForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BuyerValues>({
    resolver: zodResolver(buyerSchema),
    defaultValues: buyerDefaults,
  });

  async function onSubmit(values: BuyerValues) {
    const { website: _h, ...clean } = values;
    const result = await submitLead({ leadType: "buyer", ...clean });
    if (!result.ok) {
      toast.error(result.error || "Something went wrong. Please try again.");
      return;
    }
    toast.success("Search request received. Elena will be in touch shortly.");
    reset(buyerDefaults);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-card border border-border rounded-sm p-6 md:p-9 relative"
      noValidate
    >
      <h3 className="font-display text-2xl text-foreground mb-1">Start Your Home Search</h3>
      <p className="text-sm text-foreground/55 mb-6">
        For buyers — including off-market opportunities.
      </p>
      <Honeypot<BuyerValues> register={register} />
      <div className="grid sm:grid-cols-2 gap-4">
        <Field
          id="b-fullName"
          label="Full Name"
          required
          error={errors.fullName?.message}
          inputProps={register("fullName")}
        />
        <Field
          id="b-email"
          label="Email"
          required
          error={errors.email?.message}
          inputProps={register("email")}
          type="email"
        />
        <Field
          id="b-phone"
          label="Phone"
          required
          error={errors.phone?.message}
          inputProps={{ ...register("phone"), inputMode: "tel", autoComplete: "tel" }}
          type="tel"
        />
        <Field
          id="b-area"
          label="Desired Area"
          placeholder="Richland, Kennewick…"
          error={errors.area?.message}
          inputProps={register("area")}
        />
        <Field
          id="b-priceRange"
          label="Price Range"
          placeholder="$1M – $2.5M"
          error={errors.priceRange?.message}
          inputProps={register("priceRange")}
        />
        <Field
          id="b-beds"
          label="Beds"
          error={errors.beds?.message}
          inputProps={{ ...register("beds"), inputMode: "numeric" }}
        />
        <SelectField<BuyerValues>
          id="b-timeline"
          name="timeline"
          label="Timeline"
          register={register}
          error={errors.timeline?.message}
          options={["Just exploring", "0–3 months", "3–6 months", "6–12 months", "12+ months"]}
        />
        <div className="sm:col-span-2">
          <Label htmlFor="b-notes" className="text-foreground/75 text-xs tracking-wider uppercase">
            Must-Haves / Notes
          </Label>
          <Textarea id="b-notes" rows={3} className="mt-2" {...register("notes")} />
          {errors.notes?.message ? (
            <p className="text-sm text-destructive mt-1">{errors.notes.message}</p>
          ) : null}
        </div>
      </div>
      <Button type="submit" className="w-full mt-7 h-12" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Start My Search"}
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  required,
  placeholder,
  error,
  inputProps,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  error?: string;
  inputProps: ComponentProps<"input">;
}) {
  return (
    <div>
      <Label htmlFor={id} className="text-foreground/75 text-xs tracking-wider uppercase">
        {label}
        {required ? <span className="text-primary"> *</span> : null}
      </Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`mt-2 ${error ? "border-destructive" : ""}`}
        aria-invalid={error ? true : undefined}
        {...inputProps}
      />
      {error ? <p className="text-sm text-destructive mt-1">{error}</p> : null}
    </div>
  );
}

function SelectField<T extends FieldValues>({
  id,
  name,
  label,
  options,
  register,
  error,
}: {
  id: string;
  name: Path<T>;
  label: string;
  options: string[];
  register: UseFormRegister<T>;
  error?: string;
}) {
  return (
    <div>
      <Label htmlFor={id} className="text-foreground/75 text-xs tracking-wider uppercase">
        {label}
      </Label>
      <select
        id={id}
        defaultValue=""
        className={`mt-2 w-full h-9 rounded-sm bg-input/50 border px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${
          error ? "border-destructive" : "border-border"
        }`}
        aria-invalid={error ? true : undefined}
        {...register(name)}
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error ? <p className="text-sm text-destructive mt-1">{error}</p> : null}
    </div>
  );
}

function Honeypot<T extends FieldValues & { website: string }>({
  register,
}: {
  register: UseFormRegister<T>;
}) {
  return (
    <div
      aria-hidden
      className="absolute left-[-9999px] w-px h-px overflow-hidden"
      style={{ position: "absolute" }}
    >
      <label>
        Website (leave empty)
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
          {...register("website" as Path<T>)}
        />
      </label>
    </div>
  );
}
