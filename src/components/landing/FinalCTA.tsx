import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-20 md:py-28 border-t border-border/50">
      <div className="max-w-5xl mx-auto px-5 md:px-8 text-center">
        <p className="text-xs tracking-[0.3em] text-primary uppercase mb-4">Ready when you are</p>
        <h2 className="text-3xl md:text-5xl font-light text-foreground leading-tight">
          Schedule a private consultation with Elena.
        </h2>
        <p className="mt-5 text-foreground/65 max-w-2xl mx-auto">
          A 30-minute conversation — no pressure, complete confidentiality — to map out your next move.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="h-12 px-8 text-base">
            <a href="#valuation">Book a Consultation</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
