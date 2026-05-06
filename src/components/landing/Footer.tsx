export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="border-t border-border/60 bg-card/40">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-semibold tracking-[0.2em] text-primary">ELENA VANCE</div>
          <p className="mt-4 text-sm text-foreground/60 max-w-sm leading-relaxed">
            Premier representation for luxury single-family homes across the Tri-Cities, Washington.
            Discreet. Data-driven. Genuinely personal.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-medium text-foreground tracking-wider uppercase mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li>Phone: (509) 555-0142</li>
            <li>Email: elena@elenavance.com</li>
            <li>Office: 1200 Columbia Center Blvd, Kennewick, WA 99336</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium text-foreground tracking-wider uppercase mb-4">Social</h4>
          <ul className="space-y-2 text-xs font-mono text-primary/90 break-all">
            <li>https://instagram.com/elenavance</li>
            <li>https://facebook.com/elenavancehomes</li>
            <li>https://linkedin.com/in/elenavance</li>
            <li>https://youtube.com/@elenavance</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row gap-3 justify-between text-xs text-foreground/50">
          <p>© {year} Elena Vance Real Estate · Vance & Co. Brokerage · WA Lic. #12345</p>
          <p>Equal Housing Opportunity</p>
        </div>
      </div>
    </footer>
  );
}
