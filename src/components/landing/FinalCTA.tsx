import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-20 md:py-28 border-t border-border bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto px-5 md:px-8 text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase opacity-70 mb-4">Ready when you are</p>
        <h2 className="font-display text-4xl md:text-6xl font-light leading-[1.05]">
          Schedule a private consultation.
        </h2>
        <p className="mt-5 opacity-80 max-w-2xl mx-auto">
          A 30-minute conversation — no pressure, complete confidentiality — to map out your next
          move.
        </p>
        <div className="mt-8">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="h-12 px-8 text-base bg-background text-foreground hover:bg-background/90"
          >
            <a href="#valuation">Book a Consultation</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
