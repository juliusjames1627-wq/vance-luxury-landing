import { Play } from "lucide-react";

export function VideoSpotlight() {
  return (
    <section className="py-20 md:py-28 bg-foreground text-background overflow-hidden relative">
      <div className="absolute inset-0 opacity-40">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1920"
          className="h-full w-full object-cover ken-burns"
          alt="Cinematic home interior"
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10 flex flex-col items-center text-center">
        <button className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-background/30 backdrop-blur-sm flex items-center justify-center group hover:scale-110 transition-all duration-500 mb-10">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-background flex items-center justify-center text-foreground transition-transform group-hover:scale-90">
            <Play className="h-6 w-6 md:h-8 md:w-8 fill-current ml-1" />
          </div>
        </button>

        <p className="text-[11px] tracking-[0.4em] uppercase text-primary font-bold mb-6">
          The Elena Vance Method
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-light max-w-4xl leading-tight mb-8">
          A cinematic approach to real estate storytelling.
        </h2>
        <p className="text-background/60 max-w-2xl text-lg font-light leading-relaxed">
          We don't just list properties; we produce them. Watch how we transform high-end houses
          into aspirational lifestyle brands that command higher premiums.
        </p>
      </div>
    </section>
  );
}
