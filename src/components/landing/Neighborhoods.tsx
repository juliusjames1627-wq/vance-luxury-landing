const hoods = [
  { name: "Richland", price: "$1.4M", vibe: "Riverfront living, top schools, Hanford proximity." },
  { name: "Kennewick", price: "$985K", vibe: "Established estates, Canyon Lakes golf, sweeping vistas." },
  { name: "Pasco", price: "$1.1M", vibe: "Vineyard country, new luxury construction, wine corridor." },
  { name: "West Richland", price: "$1.25M", vibe: "Quiet acreage, custom builds, Badger Mountain views." },
];

export function Neighborhoods() {
  return (
    <section id="neighborhoods" className="py-20 md:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-12">
          <p className="text-[11px] tracking-[0.3em] text-primary uppercase mb-3">03 — Local Knowledge</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">Tri-Cities Neighborhoods</h2>
          <p className="mt-3 text-foreground/60 max-w-2xl">A quick orientation to the four communities we know best — and the price points where luxury inventory typically lives.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {hoods.map((h, i) => (
            <a key={h.name} href="#valuation" className="group block bg-card border border-border rounded-sm p-6 hover:border-primary/60 transition-colors">
              <div className="text-[10px] tracking-widest uppercase text-foreground/40 mb-3">0{i + 1}</div>
              <h3 className="font-display text-2xl text-foreground">{h.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-wider text-primary">Median Luxury · {h.price}</p>
              <p className="mt-4 text-sm text-foreground/65 leading-relaxed">{h.vibe}</p>
              <p className="mt-6 text-xs text-primary group-hover:translate-x-0.5 transition-transform inline-block">Explore →</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
