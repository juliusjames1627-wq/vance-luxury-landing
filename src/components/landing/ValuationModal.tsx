import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Check, Home, MapPin, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { submitLead } from "@/lib/submit-lead";

const valuationSchema = z.object({
  address: z.string().trim().min(1, "Please enter the property address."),
  condition: z.string().min(1, "Select a condition."),
  timeline: z.string().min(1, "Select a timeline."),
  firstName: z.string().trim().min(1, "First name required").max(80),
  lastName: z.string().trim().min(1, "Last name required").max(80),
  email: z.string().trim().email("Invalid email").max(255),
});

type ValuationFormValues = z.infer<typeof valuationSchema>;

const defaultValues: ValuationFormValues = {
  address: "",
  condition: "",
  timeline: "",
  firstName: "",
  lastName: "",
  email: "",
};

const CONDITIONS = ["Exquisite", "Turn-key", "Lived-in", "Restoration Opportunity"] as const;
const TIMELINES = ["Immediate", "3-6 Months", "Exploring", "Estate Planning"] as const;

interface ValuationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialAddress?: string;
}

export function ValuationModal({ open, onOpenChange, initialAddress = "" }: ValuationModalProps) {
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ValuationFormValues>({
    resolver: zodResolver(valuationSchema),
    defaultValues,
    shouldUnregister: false,
  });

  const condition = watch("condition");
  const timeline = watch("timeline");

  useEffect(() => {
    if (!open) {
      setStep(1);
      reset(defaultValues);
    }
  }, [open, reset]);

  useEffect(() => {
    if (open && initialAddress) {
      setValue("address", initialAddress);
    }
  }, [open, initialAddress, setValue]);

  async function goToStep2() {
    const ok = await trigger("address");
    if (ok) setStep(2);
  }

  async function goToStep3() {
    const ok = await trigger(["condition", "timeline"]);
    if (ok) setStep(3);
  }

  async function onValid(values: ValuationFormValues) {
    const result = await submitLead({
      leadType: "valuation_modal",
      ...values,
    });
    if (!result.ok) {
      toast.error(result.error || "Could not submit. Please try again.");
      return;
    }
    toast.success("Your white-glove valuation request is on its way.");
    sessionStorage.setItem("ev:prefill-address", values.address);
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden glass-premium border-primary/20 rounded-2xl">
        <form onSubmit={handleSubmit(onValid)} className="p-8">
          <div className="flex gap-2 mb-8" aria-hidden>
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={cn(
                  "h-1 flex-1 rounded-full transition-colors duration-500",
                  s <= step ? "bg-primary" : "bg-primary/10",
                )}
              />
            ))}
          </div>

          {step === 1 ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="h-6 w-6 text-primary" aria-hidden />
              </div>
              <DialogHeader className="text-left mb-6">
                <DialogTitle className="font-display text-3xl font-light">
                  Identify your property
                </DialogTitle>
                <DialogDescription className="text-foreground/60">
                  We'll prepare a bespoke analysis based on recent off-market and public sales.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="modal-address">Property Address</Label>
                  <Input
                    id="modal-address"
                    placeholder="123 Luxury Way, Richland, WA"
                    className={cn(
                      "h-12 bg-white/50 border-primary/10 focus:border-primary/40 rounded-xl",
                      errors.address && "border-destructive",
                    )}
                    aria-invalid={errors.address ? true : undefined}
                    autoComplete="street-address"
                    {...register("address")}
                  />
                  {errors.address ? (
                    <p className="text-sm text-destructive">{errors.address.message}</p>
                  ) : null}
                </div>
                <Button
                  type="button"
                  onClick={goToStep2}
                  className="w-full h-12 rounded-xl text-base group"
                >
                  Continue{" "}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ) : null}

          {step === 2 ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Home className="h-6 w-6 text-primary" aria-hidden />
              </div>
              <DialogHeader className="text-left mb-6">
                <DialogTitle className="font-display text-3xl font-light">
                  Aesthetic & Motivation
                </DialogTitle>
                <DialogDescription className="text-foreground/60">
                  Help us understand the unique positioning of your estate.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6">
                <fieldset className="space-y-3">
                  <legend className="text-xs uppercase tracking-widest text-foreground/40 mb-3">
                    Condition
                  </legend>
                  <div className="grid grid-cols-2 gap-3">
                    {CONDITIONS.map((cond) => (
                      <button
                        key={cond}
                        type="button"
                        onClick={() =>
                          setValue("condition", cond, { shouldValidate: true, shouldDirty: true })
                        }
                        className={cn(
                          "h-12 rounded-lg border text-xs font-medium transition-all",
                          condition === cond
                            ? "border-primary bg-primary/10 text-foreground"
                            : "border-primary/10 bg-white/50 hover:border-primary/40 hover:bg-primary/5",
                        )}
                      >
                        {cond}
                      </button>
                    ))}
                  </div>
                  {errors.condition ? (
                    <p className="text-sm text-destructive">{errors.condition.message}</p>
                  ) : null}
                </fieldset>
                <fieldset className="space-y-3">
                  <legend className="text-xs uppercase tracking-widest text-foreground/40 mb-3">
                    Your Timeline
                  </legend>
                  <div className="grid grid-cols-2 gap-3">
                    {TIMELINES.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() =>
                          setValue("timeline", time, { shouldValidate: true, shouldDirty: true })
                        }
                        className={cn(
                          "h-12 rounded-lg border text-xs font-medium transition-all",
                          timeline === time
                            ? "border-primary bg-primary/10 text-foreground"
                            : "border-primary/10 bg-white/50 hover:border-primary/40 hover:bg-primary/5",
                        )}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  {errors.timeline ? (
                    <p className="text-sm text-destructive">{errors.timeline.message}</p>
                  ) : null}
                </fieldset>
                <Button
                  type="button"
                  onClick={goToStep3}
                  className="w-full h-12 rounded-xl text-base group mt-4"
                >
                  Finalization{" "}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ) : null}

          {step === 3 ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <User className="h-6 w-6 text-primary" aria-hidden />
              </div>
              <DialogHeader className="text-left mb-6">
                <DialogTitle className="font-display text-3xl font-light">
                  Secure Your Report
                </DialogTitle>
                <DialogDescription className="text-foreground/60">
                  Your "White-Glove" valuation report will be delivered by Elena Vance personally.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input
                      id="first-name"
                      placeholder="Elena"
                      className={cn(
                        "h-12 bg-white/50 border-primary/10 rounded-xl",
                        errors.firstName && "border-destructive",
                      )}
                      autoComplete="given-name"
                      aria-invalid={errors.firstName ? true : undefined}
                      {...register("firstName")}
                    />
                    {errors.firstName ? (
                      <p className="text-sm text-destructive">{errors.firstName.message}</p>
                    ) : null}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input
                      id="last-name"
                      placeholder="Vance"
                      className={cn(
                        "h-12 bg-white/50 border-primary/10 rounded-xl",
                        errors.lastName && "border-destructive",
                      )}
                      autoComplete="family-name"
                      aria-invalid={errors.lastName ? true : undefined}
                      {...register("lastName")}
                    />
                    {errors.lastName ? (
                      <p className="text-sm text-destructive">{errors.lastName.message}</p>
                    ) : null}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Preferred Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="elena@luxury.com"
                    className={cn(
                      "h-12 bg-white/50 border-primary/10 rounded-xl",
                      errors.email && "border-destructive",
                    )}
                    autoComplete="email"
                    aria-invalid={errors.email ? true : undefined}
                    {...register("email")}
                  />
                  {errors.email ? (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  ) : null}
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 rounded-xl text-base bg-primary hover:bg-primary/90 text-primary-foreground group shadow-xl shadow-primary/20"
                >
                  {isSubmitting ? "Sending…" : "Request White-Glove Report"}{" "}
                  {!isSubmitting ? <Check className="ml-2 h-4 w-4" aria-hidden /> : null}
                </Button>
              </div>
            </div>
          ) : null}
        </form>
      </DialogContent>
    </Dialog>
  );
}
