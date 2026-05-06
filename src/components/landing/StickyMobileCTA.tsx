export function StickyMobileCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-background/95 backdrop-blur border-t border-border">
      <a
        href="#valuation"
        className="block w-full text-center bg-primary text-primary-foreground font-medium tracking-wide py-3.5 rounded-sm text-sm"
      >
        Get Your Free Home Valuation →
      </a>
    </div>
  );
}
