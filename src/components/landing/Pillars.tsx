import { Sparkles, LineChart, KeyRound } from "lucide-react";

const pillars = [
  {
    icon: Sparkles,
    title: "Concierge Marketing",
    desc: "Architectural photography, cinematic film, and targeted print + digital placement that positions every home as the prize listing in its market.",
  },
  {
    icon: LineChart,
    title: "Data-Driven Pricing",
    desc: "Hyper-local comparable analysis combined with national luxury trend data to price for both speed and full value.",
  },
  {
    icon: KeyRound,
    title: "Discreet Off-Market",
    desc: "A private network of qualified buyers and sellers — for clients who value privacy as much as the result.",
  },
];

export function Pillars() {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-[11px] tracking-[0.3em] text-primary uppercase mb-3">
            Why work with us
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            A different standard, end to end.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border rounded-sm overflow-hidden">
          {pillars.map((p) => (
            <div key={p.title} className="bg-card p-8 md:p-10">
              <p.icon className="h-8 w-8 text-primary mb-6" strokeWidth={1.25} />
              <h3 className="font-display text-2xl text-foreground mb-3">{p.title}</h3>
              <p className="text-foreground/65 leading-relaxed text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
