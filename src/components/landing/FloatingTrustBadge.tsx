import { Award, Star } from "lucide-react";

export function FloatingTrustBadge() {
  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-3 p-3 pl-4 glass-premium rounded-full shadow-2xl border border-primary/20 animate-in fade-in slide-in-from-right-8 duration-1000 delay-1000 fill-mode-both">
      <div className="flex flex-col">
        <span className="text-[10px] tracking-[0.2em] uppercase text-primary font-bold leading-none mb-1">
          Top 1% Agent
        </span>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-2.5 w-2.5 fill-primary text-primary" />
          ))}
          <span className="text-[9px] text-foreground/60 font-medium ml-1">5.0 RATED</span>
        </div>
      </div>
      <div className="h-8 w-px bg-primary/20 mx-1" />
      <div className="bg-primary/10 p-1.5 rounded-full">
        <Award className="h-4 w-4 text-primary" />
      </div>
    </div>
  );
}
