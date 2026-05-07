import { useState } from "react";
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

interface ValuationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialAddress?: string;
}

export function ValuationModal({ open, onOpenChange, initialAddress = "" }: ValuationModalProps) {
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState(initialAddress);

  const nextStep = () => setStep((s) => s + 1);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden glass-premium border-primary/20 rounded-2xl">
        <div className="p-8">
          <div className="flex gap-2 mb-8">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
                  s <= step ? "bg-primary" : "bg-primary/10"
                }`}
              />
            ))}
          </div>

          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <DialogHeader className="text-left mb-6">
                <DialogTitle className="font-display text-3xl font-light">
                  Confirm your property
                </DialogTitle>
                <DialogDescription className="text-foreground/60">
                  We'll use this to pull recent comparable sales in your neighborhood.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="modal-address">Property Address</Label>
                  <Input
                    id="modal-address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="123 Luxury Way, Richland, WA"
                    className="h-12 bg-white/50 border-primary/10 focus:border-primary/40 rounded-xl"
                  />
                </div>
                <Button onClick={nextStep} className="w-full h-12 rounded-xl text-base group">
                  Continue{" "}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Home className="h-6 w-6 text-primary" />
              </div>
              <DialogHeader className="text-left mb-6">
                <DialogTitle className="font-display text-3xl font-light">
                  Tell us about your home
                </DialogTitle>
                <DialogDescription className="text-foreground/60">
                  Any major upgrades or unique features we should know about?
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {["Excellent", "Good", "Fair", "Needs Work"].map((cond) => (
                    <button
                      key={cond}
                      className="h-16 rounded-xl border border-primary/10 bg-white/50 hover:border-primary/40 hover:bg-primary/5 transition-all text-sm font-medium"
                    >
                      {cond}
                    </button>
                  ))}
                </div>
                <Button onClick={nextStep} className="w-full h-12 rounded-xl text-base group">
                  Final Step{" "}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <User className="h-6 w-6 text-primary" />
              </div>
              <DialogHeader className="text-left mb-6">
                <DialogTitle className="font-display text-3xl font-light">
                  Where should we send it?
                </DialogTitle>
                <DialogDescription className="text-foreground/60">
                  You'll receive a detailed market analysis within 24 hours.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input
                      id="first-name"
                      placeholder="Elena"
                      className="h-12 bg-white/50 border-primary/10 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input
                      id="last-name"
                      placeholder="Vance"
                      className="h-12 bg-white/50 border-primary/10 rounded-xl"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="elena@luxury.com"
                    className="h-12 bg-white/50 border-primary/10 rounded-xl"
                  />
                </div>
                <Button className="w-full h-12 rounded-xl text-base bg-primary hover:bg-primary/90 text-primary-foreground group">
                  Get My Free Valuation <Check className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
