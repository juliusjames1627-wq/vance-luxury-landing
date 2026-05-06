import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-home.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Luxury Tri-Cities estate at golden hour"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/55 to-background" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-32 md:py-40 w-full">
        <div className="max-w-2xl">
          <p className="text-xs md:text-sm tracking-[0.3em] text-primary uppercase mb-6">
            Tri-Cities, WA · Luxury Single-Family Homes
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] text-foreground">
            Where premier homes meet <span className="text-primary italic font-serif">discerning</span> buyers.
          </h1>
          <p className="mt-6 md:mt-8 text-base md:text-lg text-foreground/75 max-w-xl leading-relaxed">
            White-glove representation, off-market access, and data-driven results for high-ticket
            single-family homes across Richland, Kennewick, Pasco, and West Richland.
          </p>
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="text-base h-12 px-7">
              <a href="#valuation">Get Your Free Home Valuation</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base h-12 px-7 bg-transparent border-foreground/30 text-foreground hover:bg-foreground/5">
              <a href="#listings">Browse Featured Listings</a>
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs md:text-sm text-foreground/60 tracking-wide">
            <span><span className="text-primary font-medium">$250M+</span> Sold</span>
            <span><span className="text-primary font-medium">200+</span> Families Served</span>
            <span><span className="text-primary font-medium">5★</span> Client Rated</span>
          </div>
        </div>
      </div>
    </section>
  );
}
