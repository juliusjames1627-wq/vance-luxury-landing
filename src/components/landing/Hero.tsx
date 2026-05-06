import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImg from "@/assets/hero-home.jpg";
import { ArrowRight } from "lucide-react";

export function Hero() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const address = String(fd.get("address") || "").trim();
    if (!address) return;
    sessionStorage.setItem("ev:prefill-address", address);
    document.getElementById("valuation")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden pt-16">
      <img
        src={heroImg}
        alt="Luxury Tri-Cities estate at golden hour"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28 w-full">
        <div className="max-w-2xl">
          <p className="text-[11px] md:text-xs tracking-[0.3em] text-primary uppercase mb-6">
            Tri-Cities, WA · Luxury Single-Family Homes
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light leading-[0.98] text-foreground">
            Where premier homes meet <em className="text-primary not-italic font-display italic">discerning</em> buyers.
          </h1>
          <p className="mt-6 md:mt-8 text-base md:text-lg text-foreground/70 max-w-xl leading-relaxed">
            White-glove representation, off-market access, and data-driven results for high-ticket
            single-family homes across Richland, Kennewick, Pasco, and West Richland.
          </p>

          <form onSubmit={onSubmit} className="mt-10 bg-card/95 backdrop-blur border border-border rounded-sm p-3 sm:p-2 sm:pl-5 flex flex-col sm:flex-row gap-3 sm:items-center shadow-xl shadow-primary/5 max-w-xl">
            <div className="flex-1 sm:flex sm:items-center sm:gap-3">
              <label htmlFor="hero-address" className="text-[10px] tracking-[0.25em] uppercase text-foreground/55 sm:whitespace-nowrap">
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
            <Button type="submit" size="lg" className="h-11 px-5 shrink-0">
              Get Estimate <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </form>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs md:text-sm text-foreground/55 tracking-wide">
            <span><span className="text-primary font-medium">$250M+</span> Sold</span>
            <span className="text-border">·</span>
            <span><span className="text-primary font-medium">200+</span> Families Served</span>
            <span className="text-border">·</span>
            <span><span className="text-primary font-medium">5★</span> Client Rated</span>
          </div>
        </div>
      </div>
    </section>
  );
}
