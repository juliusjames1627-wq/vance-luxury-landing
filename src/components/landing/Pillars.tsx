import { Sparkles, LineChart, KeyRound } from "lucide-react";

const pillars = [
  { icon: Sparkles, title: "Concierge Marketing", desc: "Architectural photography, cinematic film, and targeted print + digital placement that positions every home as the prize listing in its market." },
  { icon: LineChart, title: "Data-Driven Pricing", desc: "Hyper-local comparable analysis combined with national luxury trend data to price for both speed and full value." },
  { icon: KeyRound, title: "Discreet Off-Market Access", desc: "A private network of qualified buyers and sellers — for clients who value privacy as much as the result." },
];

export function Pillars() {
  return (
    <section className="py-20 md:py-28 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-xs tracking-[0.3em] text-primary uppercase mb-3">Why work with us</p>
          <h2 className="text-3xl md:text-5xl font-light text-foreground">A different standard, end to end.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {pillars.map((p) => (
            <div key={p.title} className="bg-card border border-border/60 p-8 rounded-md">
              <p.icon className="h-8 w-8 text-primary mb-6" strokeWidth={1.25} />
              <h3 className="text-xl font-medium text-foreground mb-3">{p.title}</h3>
              <p className="text-foreground/65 leading-relaxed text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
