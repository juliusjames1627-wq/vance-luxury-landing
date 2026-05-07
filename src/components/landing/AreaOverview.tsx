import { MapPin } from "lucide-react";

const enclaves = [
  { name: "South Richland", type: "Estate Homes", x: "30%", y: "40%" },
  { name: "Canyon Lakes", type: "Golf Luxury", x: "60%", y: "55%" },
  { name: "West Richland", type: "Acreage", x: "20%", y: "70%" },
  { name: "Badger Mountain", type: "View Estates", x: "45%", y: "80%" },
  { name: "Willow Creek", type: "Riverfront", x: "75%", y: "30%" },
];

export function AreaOverview() {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-[11px] tracking-[0.3em] text-primary uppercase mb-3">
              05 — Territory
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
              Area Overview
            </h2>
          </div>
          <p className="text-foreground/60 max-w-md text-sm md:text-base font-light">
            A bird's-eye view of the most coveted enclaves in the Tri-Cities. Each neighborhood
            selected for its unique architectural character and investment stability.
          </p>
        </div>

        <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden glass-premium border-primary/20 shadow-2xl group">
          {/* Map Placeholder Image */}
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1920"
            className="absolute inset-0 h-full w-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000"
            alt="Map of Tri-Cities"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

          {/* Markers */}
          {enclaves.map((e, i) => (
            <div
              key={e.name}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group/marker"
              style={{ left: e.x, top: e.y }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary rounded-full scale-100 group-hover/marker:scale-[3] opacity-20 group-hover/marker:opacity-0 transition-all duration-700" />
                <div className="bg-primary p-2 rounded-full shadow-lg relative z-10 transition-transform group-hover/marker:scale-110">
                  <MapPin className="h-4 w-4 text-primary-foreground" />
                </div>

                <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover/marker:opacity-100 transition-all duration-300 pointer-events-none">
                  <div className="glass-premium px-4 py-2 rounded-xl border border-primary/20 shadow-xl">
                    <p className="text-xs font-bold text-primary tracking-widest uppercase mb-0.5">
                      {e.name}
                    </p>
                    <p className="text-[10px] text-foreground/60 uppercase">{e.type}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
            <div className="glass-premium px-6 py-4 rounded-2xl border border-white/10 backdrop-blur-xl max-w-sm">
              <p className="text-[10px] tracking-[0.2em] uppercase text-primary font-bold mb-2">
                Market Intensity
              </p>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-1.5 bg-primary/10 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-primary rounded-full" />
                </div>
                <span className="text-xs font-bold text-foreground">HIGH</span>
              </div>
            </div>

            <div className="hidden md:block glass-premium px-6 py-4 rounded-2xl border border-white/10 backdrop-blur-xl">
              <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 font-bold mb-1">
                Live Feed
              </p>
              <p className="text-xs text-primary font-mono animate-pulse">
                4 PROPERTIES ACTIVE IN RICHLAND BEND
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
