import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const links = [
  { href: "#listings", label: "Listings" },
  { href: "#neighborhoods", label: "Neighborhoods" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <rect
        x="0.5"
        y="0.5"
        width="39"
        height="39"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <text
        x="20"
        y="27"
        textAnchor="middle"
        fontFamily="Fraunces, serif"
        fontWeight="400"
        fontSize="20"
        fill="currentColor"
        fontStyle="italic"
      >
        EV
      </text>
    </svg>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-4 inset-x-4 md:inset-x-8 z-50 glass-premium rounded-2xl">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 text-primary group">
          <Monogram className="h-7 w-7 transition-transform duration-500 group-hover:rotate-12" />
          <span className="font-display text-base tracking-wide uppercase">Elena Vance</span>
        </a>
        <nav className="hidden lg:flex items-center gap-8 text-sm text-foreground/75">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="#valuation">Free Valuation</a>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-border">
              <div className="flex flex-col gap-5 mt-12">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-lg text-foreground hover:text-primary"
                  >
                    {l.label}
                  </a>
                ))}
                <Button asChild className="mt-4">
                  <a href="#valuation" onClick={() => setOpen(false)}>
                    Free Valuation
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
