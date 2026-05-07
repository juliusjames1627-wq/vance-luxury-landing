export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="border-t border-border bg-card/60 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-10 bg-primary/5 flex items-center overflow-hidden border-b border-primary/10">
        <div className="flex whitespace-nowrap animate-in slide-in-from-right duration-[30000ms] linear infinite">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-10 px-10 text-[10px] tracking-[0.2em] uppercase text-primary/60 font-medium"
            >
              <span>Sold: $2.45M in Richland</span>
              <span className="text-primary/20">·</span>
              <span>Pending: $1.89M in Kennewick</span>
              <span className="text-primary/20">·</span>
              <span>Sold: $3.2M in West Richland</span>
              <span className="text-primary/20">·</span>
              <span>Closed: $1.4M in Pasco</span>
              <span className="text-primary/20">·</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 mt-10 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl text-primary tracking-tight uppercase">
            Elena Vance
          </div>
          <p className="mt-4 text-sm text-foreground/60 max-w-sm leading-relaxed font-light">
            Premier representation for luxury single-family homes across the Tri-Cities, Washington.
            Discreet. Data-driven. Genuinely personal.
          </p>
        </div>
        <div>
          <h4 className="text-[11px] font-semibold text-foreground tracking-[0.25em] uppercase mb-6">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-foreground/70 font-light">
            <li className="hover:text-primary transition-colors cursor-pointer">(509) 555-0142</li>
            <li className="hover:text-primary transition-colors cursor-pointer">
              elena@elenavance.com
            </li>
            <li className="leading-relaxed">
              1200 Columbia Center Blvd
              <br />
              Kennewick, WA 99336
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] font-semibold text-foreground tracking-[0.25em] uppercase mb-6">
            Social
          </h4>
          <ul className="space-y-3 text-xs font-mono text-primary/80 break-all">
            <li className="hover:text-primary transition-colors cursor-pointer">
              instagram.com/elenavance
            </li>
            <li className="hover:text-primary transition-colors cursor-pointer">
              facebook.com/elenavancehomes
            </li>
            <li className="hover:text-primary transition-colors cursor-pointer">
              linkedin.com/in/elenavance
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row gap-4 justify-between text-[10px] tracking-wider uppercase text-foreground/40 font-medium">
          <p>© {year} Elena Vance Real Estate · Vance & Co. Brokerage · WA Lic. #12345</p>
          <div className="flex gap-6">
            <p>Privacy Policy</p>
            <p>Equal Housing Opportunity</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
