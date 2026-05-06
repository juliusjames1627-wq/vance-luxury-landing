import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";

const sellerSchema = z.object({
  fullName: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Invalid phone").max(30),
  address: z.string().trim().min(1, "Address required").max(200),
  city: z.string().trim().max(80).optional().or(z.literal("")),
  beds: z.string().trim().max(10).optional().or(z.literal("")),
  baths: z.string().trim().max(10).optional().or(z.literal("")),
  sqft: z.string().trim().max(15).optional().or(z.literal("")),
  timeline: z.string().trim().max(50).optional().or(z.literal("")),
  notes: z.string().trim().max(2000).optional().or(z.literal("")),
});

const buyerSchema = z.object({
  fullName: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Invalid phone").max(30),
  area: z.string().trim().max(120).optional().or(z.literal("")),
  priceRange: z.string().trim().max(60).optional().or(z.literal("")),
  beds: z.string().trim().max(10).optional().or(z.literal("")),
  timeline: z.string().trim().max(50).optional().or(z.literal("")),
  notes: z.string().trim().max(2000).optional().or(z.literal("")),
});

function fieldId(prefix: string, name: string) { return `${prefix}-${name}`; }

export function LeadForms() {
  return (
    <section id="valuation" className="py-20 md:py-28 border-t border-border/50 bg-card/30">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs tracking-[0.3em] text-primary uppercase mb-3">Start the conversation</p>
          <h2 className="text-3xl md:text-5xl font-light text-foreground">Tell us about your move.</h2>
          <p className="mt-4 text-foreground/65">
            Whether you're listing or looking, you'll hear back from Elena personally — typically within one business day.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <SellerForm />
          <BuyerForm />
        </div>
      </div>
    </section>
  );
}

function SellerForm() {
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
    setSubmitting(true);
    const payload = { leadType: "seller", ...result.data, submittedAt: new Date().toISOString() };
    // Clean, flat payload — ready for CRM/CSV ingestion
    console.log("[LEAD]", JSON.stringify(payload));
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Valuation request received. Elena will be in touch shortly.");
      (e.target as HTMLFormElement).reset();
    }, 400);
  }

  return (
    <form onSubmit={onSubmit} className="bg-card border border-border/60 rounded-md p-6 md:p-8" noValidate>
      <h3 className="text-2xl font-light text-foreground mb-1">Get Your Free Home Valuation</h3>
      <p className="text-sm text-foreground/60 mb-6">For sellers — no obligation.</p>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field id={fieldId("s","fullName")} name="fullName" label="Full Name" required />
        <Field id={fieldId("s","email")} name="email" label="Email" type="email" required />
        <Field id={fieldId("s","phone")} name="phone" label="Phone" type="tel" required inputMode="tel" />
        <Field id={fieldId("s","city")} name="city" label="City" />
        <div className="sm:col-span-2">
          <Field id={fieldId("s","address")} name="address" label="Property Address" required />
        </div>
        <Field id={fieldId("s","beds")} name="beds" label="Beds" inputMode="numeric" />
        <Field id={fieldId("s","baths")} name="baths" label="Baths" inputMode="numeric" />
        <Field id={fieldId("s","sqft")} name="sqft" label="Approx. SqFt" inputMode="numeric" />
        <SelectField id={fieldId("s","timeline")} name="timeline" label="Timeline" options={["Just exploring","0–3 months","3–6 months","6–12 months","12+ months"]} />
        <div className="sm:col-span-2">
          <Label htmlFor={fieldId("s","notes")} className="text-foreground/80 text-sm">Notes</Label>
          <Textarea id={fieldId("s","notes")} name="notes" rows={3} className="mt-1.5 bg-background/60 border-border" />
        </div>
      </div>
      <Button type="submit" className="w-full mt-6 h-11" disabled={submitting}>
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
    setSubmitting(true);
    const payload = { leadType: "buyer", ...result.data, submittedAt: new Date().toISOString() };
    console.log("[LEAD]", JSON.stringify(payload));
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Search request received. Elena will be in touch shortly.");
      (e.target as HTMLFormElement).reset();
    }, 400);
  }

  return (
    <form onSubmit={onSubmit} className="bg-card border border-border/60 rounded-md p-6 md:p-8" noValidate>
      <h3 className="text-2xl font-light text-foreground mb-1">Start Your Home Search</h3>
      <p className="text-sm text-foreground/60 mb-6">For buyers — including off-market opportunities.</p>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field id={fieldId("b","fullName")} name="fullName" label="Full Name" required />
        <Field id={fieldId("b","email")} name="email" label="Email" type="email" required />
        <Field id={fieldId("b","phone")} name="phone" label="Phone" type="tel" required inputMode="tel" />
        <Field id={fieldId("b","area")} name="area" label="Desired Area" placeholder="Richland, Kennewick…" />
        <Field id={fieldId("b","priceRange")} name="priceRange" label="Price Range" placeholder="$1M – $2.5M" />
        <Field id={fieldId("b","beds")} name="beds" label="Beds" inputMode="numeric" />
        <SelectField id={fieldId("b","timeline")} name="timeline" label="Timeline" options={["Just exploring","0–3 months","3–6 months","6–12 months","12+ months"]} />
        <div className="sm:col-span-2">
          <Label htmlFor={fieldId("b","notes")} className="text-foreground/80 text-sm">Must-Haves / Notes</Label>
          <Textarea id={fieldId("b","notes")} name="notes" rows={3} className="mt-1.5 bg-background/60 border-border" />
        </div>
      </div>
      <Button type="submit" className="w-full mt-6 h-11" disabled={submitting}>
        {submitting ? "Sending…" : "Start My Search"}
      </Button>
    </form>
  );
}

function Field({ id, name, label, type = "text", required, inputMode, placeholder }: {
  id: string; name: string; label: string; type?: string; required?: boolean;
  inputMode?: "text" | "numeric" | "tel" | "email" | "url"; placeholder?: string;
}) {
  return (
    <div>
      <Label htmlFor={id} className="text-foreground/80 text-sm">
        {label}{required && <span className="text-primary"> *</span>}
      </Label>
      <Input
        id={id}
        name={name}
        type={type}
        inputMode={inputMode}
        placeholder={placeholder}
        autoComplete="off"
        className="mt-1.5 bg-background/60 border-border"
      />
    </div>
  );
}

function SelectField({ id, name, label, options }: { id: string; name: string; label: string; options: string[] }) {
  return (
    <div>
      <Label htmlFor={id} className="text-foreground/80 text-sm">{label}</Label>
      <select
        id={id}
        name={name}
        defaultValue=""
        className="mt-1.5 w-full h-9 rounded-md bg-background/60 border border-border px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      >
        <option value="">Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
