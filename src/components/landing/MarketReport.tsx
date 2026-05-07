import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Download } from "lucide-react";

export function MarketReport() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -skew-y-3 origin-right transform" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative">
        <div className="glass-premium rounded-3xl overflow-hidden border-primary/20 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-stretch">
            <div className="flex-1 p-8 md:p-16 lg:p-20">
              <div className="flex items-center gap-3 text-primary mb-6">
                <BookOpen className="h-5 w-5" />
                <span className="text-xs tracking-[0.3em] uppercase font-bold">
                  Exclusive Insight
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
                Tri-Cities Luxury Market Report{" "}
                <span className="font-serif-accent italic text-primary">Q2 2024</span>
              </h2>
              <p className="text-foreground/60 text-lg font-light leading-relaxed mb-10 max-w-xl">
                Get the raw data on off-market sales, upcoming inventory, and the real impact of
                interest rates on the high-ticket single-family market.
              </p>

              <form className="flex flex-col sm:flex-row gap-4 max-w-md">
                <Input
                  placeholder="Email Address"
                  className="h-12 bg-white/50 border-primary/10 rounded-xl"
                />
                <Button className="h-12 px-8 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2 group">
                  Download{" "}
                  <Download className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                </Button>
              </form>
              <p className="mt-4 text-[10px] text-foreground/40 uppercase tracking-widest font-medium">
                Instant Access · PDF Document · 18 Pages
              </p>
            </div>

            <div className="hidden lg:flex w-1/3 bg-primary relative items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
                  className="h-full w-full object-cover"
                  alt="Modern architecture"
                />
              </div>
              <div className="relative z-10 p-12 text-center text-primary-foreground">
                <div className="text-6xl font-display font-light mb-4 leading-none">24%</div>
                <div className="text-xs tracking-[0.2em] uppercase opacity-70">
                  Inventory Growth
                </div>
                <div className="h-px w-12 bg-white/30 mx-auto my-8" />
                <div className="text-6xl font-display font-light mb-4 leading-none">$1.2M</div>
                <div className="text-xs tracking-[0.2em] uppercase opacity-70">
                  Median Luxury Entry
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
