import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";

const baseShape = {
  fullName: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Invalid phone").max(30),
  notes: z.string().trim().max(2000).optional().or(z.literal("")),
  website: z.string().max(0, "spam"), // honeypot — must stay empty
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

type Mode = "seller" | "buyer";

export function LeadForms() {
  const [mode, setMode] = useState<Mode>("seller");
  const addressRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const prefill = sessionStorage.getItem("ev:prefill-address");
    if (prefill && addressRef.current) {
      addressRef.current.value = prefill;
      sessionStorage.removeItem("ev:prefill-address");
      setMode("seller");
    }
  }, []);

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

        {mode === "seller" ? <SellerForm addressRef={addressRef} /> : <BuyerForm />}
      </div>
    </section>
  );
}

function SellerForm({ addressRef }: { addressRef: React.RefObject<HTMLInputElement | null> }) {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries());
    const result = sellerSchema.safeParse(raw);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please review the form.");
      return;
    }
    const { website: _h, ...clean } = result.data;
    setSubmitting(true);
    const payload = { leadType: "seller", ...clean, submittedAt: new Date().toISOString() };
    console.log("[LEAD]", JSON.stringify(payload));
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Valuation request received. Elena will be in touch shortly.");
      (e.target as HTMLFormElement).reset();
    }, 400);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-card border border-border rounded-sm p-6 md:p-9"
      noValidate
    >
      <h3 className="font-display text-2xl text-foreground mb-1">Get Your Free Home Valuation</h3>
      <p className="text-sm text-foreground/55 mb-6">For sellers — no obligation.</p>
      <Honeypot />
      <div className="grid sm:grid-cols-2 gap-4">
        <Field name="fullName" label="Full Name" required autoComplete="name" />
        <Field name="email" label="Email" type="email" required autoComplete="email" />
        <Field name="phone" label="Phone" type="tel" required inputMode="tel" autoComplete="tel" />
        <Field name="city" label="City" autoComplete="address-level2" />
        <div className="sm:col-span-2">
          <Field
            name="address"
            label="Property Address"
            required
            autoComplete="street-address"
            innerRef={addressRef}
          />
        </div>
        <Field name="beds" label="Beds" inputMode="numeric" />
        <Field name="baths" label="Baths" inputMode="numeric" />
        <Field name="sqft" label="Approx. SqFt" inputMode="numeric" />
        <SelectField
          name="timeline"
          label="Timeline"
          options={["Just exploring", "0–3 months", "3–6 months", "6–12 months", "12+ months"]}
        />
        <div className="sm:col-span-2">
          <Label htmlFor="s-notes" className="text-foreground/75 text-xs tracking-wider uppercase">
            Notes
          </Label>
          <Textarea id="s-notes" name="notes" rows={3} className="mt-2" />
        </div>
      </div>
      <Button type="submit" className="w-full mt-7 h-12" disabled={submitting}>
        {submitting ? "Sending…" : "Request Valuation"}
      </Button>
    </form>
  );
}

function BuyerForm() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries());
    const result = buyerSchema.safeParse(raw);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please review the form.");
      return;
    }
    const { website: _h, ...clean } = result.data;
    setSubmitting(true);
    const payload = { leadType: "buyer", ...clean, submittedAt: new Date().toISOString() };
    console.log("[LEAD]", JSON.stringify(payload));
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Search request received. Elena will be in touch shortly.");
      (e.target as HTMLFormElement).reset();
    }, 400);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-card border border-border rounded-sm p-6 md:p-9"
      noValidate
    >
      <h3 className="font-display text-2xl text-foreground mb-1">Start Your Home Search</h3>
      <p className="text-sm text-foreground/55 mb-6">
        For buyers — including off-market opportunities.
      </p>
      <Honeypot />
      <div className="grid sm:grid-cols-2 gap-4">
        <Field name="fullName" label="Full Name" required autoComplete="name" />
        <Field name="email" label="Email" type="email" required autoComplete="email" />
        <Field name="phone" label="Phone" type="tel" required inputMode="tel" autoComplete="tel" />
        <Field name="area" label="Desired Area" placeholder="Richland, Kennewick…" />
        <Field name="priceRange" label="Price Range" placeholder="$1M – $2.5M" />
        <Field name="beds" label="Beds" inputMode="numeric" />
        <SelectField
          name="timeline"
          label="Timeline"
          options={["Just exploring", "0–3 months", "3–6 months", "6–12 months", "12+ months"]}
        />
        <div className="sm:col-span-2">
          <Label htmlFor="b-notes" className="text-foreground/75 text-xs tracking-wider uppercase">
            Must-Haves / Notes
          </Label>
          <Textarea id="b-notes" name="notes" rows={3} className="mt-2" />
        </div>
      </div>
      <Button type="submit" className="w-full mt-7 h-12" disabled={submitting}>
        {submitting ? "Sending…" : "Start My Search"}
      </Button>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  inputMode,
  placeholder,
  autoComplete,
  innerRef,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  inputMode?: "text" | "numeric" | "tel" | "email" | "url";
  placeholder?: string;
  autoComplete?: string;
  innerRef?: React.RefObject<HTMLInputElement | null>;
}) {
  const id = `f-${name}`;
  return (
    <div>
      <Label htmlFor={id} className="text-foreground/75 text-xs tracking-wider uppercase">
        {label}
        {required && <span className="text-primary"> *</span>}
      </Label>
      <Input
        id={id}
        name={name}
        type={type}
        inputMode={inputMode}
        placeholder={placeholder}
        autoComplete={autoComplete}
        ref={innerRef}
        className="mt-2"
      />
    </div>
  );
}

function SelectField({ name, label, options }: { name: string; label: string; options: string[] }) {
  const id = `f-${name}`;
  return (
    <div>
      <Label htmlFor={id} className="text-foreground/75 text-xs tracking-wider uppercase">
        {label}
      </Label>
      <select
        id={id}
        name={name}
        defaultValue=""
        className="mt-2 w-full h-9 rounded-sm bg-input/50 border border-border px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function Honeypot() {
  return (
    <div
      aria-hidden
      className="absolute left-[-9999px] w-px h-px overflow-hidden"
      style={{ position: "absolute" }}
    >
      <label>
        Website (leave empty)
        <input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
      </label>
    </div>
  );
}
