import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroSignature from "@/assets/hero-home.jpg";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { ValuationModal } from "./ValuationModal";

import { Ticker } from "./Ticker";

export function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  const [initialAddress, setInitialAddress] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const address = String(fd.get("address") || "").trim();
    setInitialAddress(address);
    setModalOpen(true);
  }

  return (
    <section id="top" className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroSignature}
          alt="Luxury fountain pen resting on a bespoke contract, symbolizing elite real estate service"
          width={1920}
          height={1080}
          className="h-full w-full object-cover ken-burns scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28 w-full flex-1 flex items-center">
        <div className="max-w-2xl">
          <p className="text-[11px] md:text-xs tracking-[0.4em] text-primary uppercase mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Tri-Cities, WA · Signature Luxury Real Estate
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light leading-[0.98] text-foreground animate-in fade-in slide-in-from-bottom-6 duration-[1500ms] delay-200">
            The final signature on your <span className="font-serif-accent text-primary">legacy</span>.
          </h1>
          <p className="mt-6 md:mt-8 text-base md:text-lg text-foreground/70 max-w-xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-[1500ms] delay-500">
            White-glove representation and off-market access for the most discerning buyers and sellers in Richland, Kennewick, and Pasco.
          </p>

          <form
            onSubmit={onSubmit}
            className="mt-10 glass-premium rounded-xl p-3 sm:p-2 sm:pl-5 flex flex-col sm:flex-row gap-3 sm:items-center shadow-2xl shadow-primary/10 max-w-xl animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500"
          >
            <div className="flex-1 sm:flex sm:items-center sm:gap-3">
              <label
                htmlFor="hero-address"
                className="text-[10px] tracking-[0.25em] uppercase text-foreground/55 sm:whitespace-nowrap"
              >
                Free Valuation
              </label>
              <Input
                id="hero-address"
                name="address"
                placeholder="Enter your home address"
                className="border-0 bg-transparent shadow-none focus-visible:ring-0 px-0 text-base h-10 placeholder:text-foreground/40"
                autoComplete="street-address"
              />
            </div>
            <Button type="submit" size="lg" className="h-11 px-5 shrink-0 rounded-lg">
              Get Estimate <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </form>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs md:text-sm text-foreground/55 tracking-wide animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700">
            <span>
              <span className="text-primary font-medium">$250M+</span> Sold
            </span>
            <span className="text-border">·</span>
            <span>
              <span className="text-primary font-medium">200+</span> Families Served
            </span>
            <span className="text-border">·</span>
            <span>
              <span className="text-primary font-medium">5★</span> Client Rated
            </span>
          </div>
        </div>
      </div>
      
      <div className="relative w-full">
        <Ticker />
      </div>

      <ValuationModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        initialAddress={initialAddress}
      />
    </section>
  );
}
