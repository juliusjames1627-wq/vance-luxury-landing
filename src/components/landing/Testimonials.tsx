import { Star } from "lucide-react";

const items = [
  { quote: "Elena sold our Richland home in nine days, $80K over list. The marketing was unlike anything I'd seen locally.", name: "Marcus & Lena P.", area: "Riverbend, Richland" },
  { quote: "She found us an off-market vineyard property we never would have known existed. Truly white-glove.", name: "Dr. Aaron K.", area: "Pasco" },
  { quote: "Calm, sharp, and genuinely on our side through a complicated negotiation. We trust her completely.", name: "The Hiroshi Family", area: "West Richland" },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 border-t border-border bg-card/40">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[11px] tracking-[0.3em] text-primary uppercase mb-3">07 — Client Trust</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">A reputation built one home at a time.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {items.map((t) => (
            <figure key={t.name} className="bg-background border border-border p-7 rounded-sm flex flex-col relative">
              <span className="absolute top-2 right-5 font-display text-7xl text-primary/20 leading-none">"</span>
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="font-display text-lg text-foreground/85 leading-relaxed flex-1 italic font-light">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-4 border-t border-border">
                <div className="text-foreground font-medium text-sm">{t.name}</div>
                <div className="text-xs text-foreground/55">{t.area}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
