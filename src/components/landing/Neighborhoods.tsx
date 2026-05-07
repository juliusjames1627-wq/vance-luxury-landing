const hoods = [
  {
    name: "Richland",
    price: "$1.4M",
    vibe: "Riverfront living, top schools, Hanford proximity.",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Kennewick",
    price: "$985K",
    vibe: "Established estates, Canyon Lakes golf, sweeping vistas.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Pasco",
    price: "$1.1M",
    vibe: "Vineyard country, new luxury construction, wine corridor.",
    img: "https://images.unsplash.com/photo-1600607687940-467f4b63577e?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "West Richland",
    price: "$1.25M",
    vibe: "Quiet acreage, custom builds, Badger Mountain views.",
    img: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&q=80&w=800",
  },
];

export function Neighborhoods() {
  return (
    <section id="neighborhoods" className="py-20 md:py-28 border-t border-border bg-primary/[0.02]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-[11px] tracking-[0.3em] text-primary uppercase mb-3">
              03 — Local Knowledge
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
              Tri-Cities Neighborhoods
            </h2>
          </div>
          <p className="text-foreground/60 max-w-md text-sm md:text-base font-light">
            A quick orientation to the four communities we know best — and the price points where
            luxury inventory typically lives.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hoods.map((h, i) => (
            <a
              key={h.name}
              href="#valuation"
              className="group relative h-[400px] rounded-2xl overflow-hidden glass-premium border-primary/10 animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <img
                src={h.img}
                alt={h.name}
                className="absolute inset-0 h-full w-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="text-[10px] tracking-widest uppercase text-primary font-bold mb-2">
                  0{i + 1}
                </div>
                <h3 className="font-display text-3xl text-foreground mb-1">{h.name}</h3>
                <p className="text-[10px] uppercase tracking-wider text-primary font-medium mb-4">
                  Median · {h.price}
                </p>

                <div className="h-0 group-hover:h-20 transition-all duration-500 overflow-hidden">
                  <p className="text-sm text-foreground/75 leading-relaxed font-light">{h.vibe}</p>
                </div>

                <div className="mt-4 flex items-center gap-2 text-[11px] tracking-widest uppercase text-primary font-semibold">
                  Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
