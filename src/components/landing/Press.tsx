const logos = [
  "Wall Street Journal",
  "Forbes",
  "Architectural Digest",
  "Mansion Global",
  "Tri-City Herald",
  "Luxury Portfolio Intl.",
];

export function Press() {
  return (
    <section className="border-y border-border bg-card/40">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-8">
        <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/50 text-center mb-5">
          As featured in
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-foreground/55">
          {logos.map((l) => (
            <span
              key={l}
              className="font-display text-base md:text-lg tracking-tight whitespace-nowrap"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
