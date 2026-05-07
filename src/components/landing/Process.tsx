const steps = [
  {
    n: "01",
    t: "Discovery",
    d: "Private consultation, high-level goal alignment, and a candid market valuation that respects your time.",
  },
  {
    n: "02",
    t: "Prep",
    d: "Editorial-grade staging, cinematic photography, and strategic pre-list improvements to maximize ROI.",
  },
  {
    n: "03",
    t: "Launch",
    d: "Coordinated print, digital, and private-network release ensuring maximum leverage from Day 1.",
  },
  {
    n: "04",
    t: "Negotiate",
    d: "Expert multiple-offer strategy and contract structuring designed to protect your interests.",
  },
  {
    n: "05",
    t: "Close",
    d: "White-glove transaction management ensuring a seamless transition from the last offer to the final keys.",
  },
];

export function Process() {
  return (
    <section className="py-20 md:py-32 border-t border-border bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/[0.01] -skew-x-12 transform origin-top" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-20 text-center">
          <p className="text-[11px] tracking-[0.3em] text-primary uppercase mb-4">
            04 — How We Work
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground max-w-3xl mx-auto leading-tight">
            A five-step process, refined over two decades.
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/5 via-primary/30 to-primary/5 hidden md:block" />

          <div className="space-y-12 md:space-y-24">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-20 animate-in fade-in slide-in-from-bottom-8 fill-mode-both ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${i * 200}ms` }}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background z-10 hidden md:block" />

                <div className={`flex-1 w-full ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="font-display text-5xl md:text-7xl text-primary/10 font-bold mb-2 md:mb-0 leading-none">
                    {s.n}
                  </div>
                </div>

                <div className="flex-1 w-full glass-premium p-8 rounded-2xl border border-primary/5 hover:border-primary/20 transition-colors shadow-sm">
                  <h3 className="font-display text-2xl text-foreground mb-3">{s.t}</h3>
                  <p className="text-sm md:text-base text-foreground/60 leading-relaxed font-light">
                    {s.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
