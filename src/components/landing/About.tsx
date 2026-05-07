import elena from "@/assets/elena.jpg";

const stats = [
  { v: "200+", l: "Homes Sold" },
  { v: "18", l: "Avg Days on Market" },
  { v: "99.4%", l: "List-to-Sale" },
  { v: "$250M+", l: "Lifetime Volume" },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="aspect-[4/5] max-w-md mx-auto overflow-hidden rounded-sm border border-primary/30">
            <img
              src={elena}
              alt="Elena Vance"
              loading="lazy"
              width={800}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-3 -right-2 lg:right-12 bg-primary text-primary-foreground px-5 py-3 text-[11px] tracking-[0.25em] uppercase">
            Founder · Lead Broker
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-[11px] tracking-[0.3em] text-primary uppercase mb-4">
            06 — About Elena Vance
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-light leading-[1.05] text-foreground">
            Two decades of Tri-Cities luxury, distilled into a single point of contact.
          </h2>
          <p className="mt-6 text-foreground/70 leading-relaxed">
            Elena Vance leads a boutique team built around one promise: high-touch service for
            high-ticket homes. From Richland's riverfront to West Richland's vineyards, our clients
            work with a true principal — not a hand-off — from first call to final signature.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div key={s.l} className="border-l-2 border-primary pl-4">
                <div className="font-display text-3xl md:text-4xl font-light text-primary">
                  {s.v}
                </div>
                <div className="text-[11px] uppercase tracking-widest text-foreground/55 mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
