const steps = [
  { n: "01", t: "Discovery", d: "Private consultation, goals, and a candid valuation." },
  { n: "02", t: "Prep", d: "Staging, photography, copy, and pre-list improvements." },
  { n: "03", t: "Launch", d: "Coordinated print, digital, and private-network release." },
  { n: "04", t: "Negotiate", d: "Multiple-offer strategy and contract structuring." },
  { n: "05", t: "Close", d: "White-glove transaction management to the keys." },
];

export function Process() {
  return (
    <section className="py-20 md:py-28 border-t border-border bg-card/40">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="text-[11px] tracking-[0.3em] text-primary uppercase mb-3">04 — How We Work</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">A five-step process, refined over two decades.</h2>
        </div>
        <ol className="grid grid-cols-2 md:grid-cols-5 gap-px bg-border border border-border rounded-sm overflow-hidden">
          {steps.map((s) => (
            <li key={s.n} className="bg-card p-6">
              <div className="font-display text-3xl text-primary font-light">{s.n}</div>
              <div className="mt-4 text-foreground font-medium">{s.t}</div>
              <p className="mt-2 text-sm text-foreground/60 leading-relaxed">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
