const sales = [
  { name: "Columbia Bluff Modern", city: "Richland", listed: "$2,250,000", sold: "$2,340,000", days: 11 },
  { name: "Canyon Lakes Retreat", city: "Kennewick", listed: "$1,495,000", sold: "$1,540,000", days: 8 },
  { name: "Badger Mountain View", city: "Richland", listed: "$1,785,000", sold: "$1,820,000", days: 14 },
];

export function RecentlySold() {
  return (
    <section className="py-20 md:py-24 border-t border-border bg-card/40">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-10">
          <p className="text-[11px] tracking-[0.3em] text-primary uppercase mb-3">02 — Track Record</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">Recently Sold</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border rounded-sm overflow-hidden">
          {sales.map((s) => (
            <div key={s.name} className="bg-card p-7">
              <h3 className="font-display text-xl text-foreground">{s.name}</h3>
              <p className="text-xs uppercase tracking-wider text-foreground/55 mt-1">{s.city}, WA</p>
              <div className="mt-6 flex items-end justify-between gap-3">
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-foreground/45">Listed</p>
                  <p className="text-base text-foreground/70 line-through decoration-foreground/30">{s.listed}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] tracking-widest uppercase text-primary">Sold</p>
                  <p className="font-display text-2xl text-primary font-light">{s.sold}</p>
                </div>
              </div>
              <p className="mt-5 text-xs text-foreground/55">Closed in <span className="text-foreground font-medium">{s.days} days</span></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
