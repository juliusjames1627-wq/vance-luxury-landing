export function Ticker() {
  const deals = [
    { address: "1248 Vista Ridge", price: "$1.85M", status: "Closed" },
    { address: "Meadow Springs Estate", price: "$2.1M", status: "Under Contract" },
    { address: "Badger Mountain Manor", price: "$1.4M", status: "Closed" },
    { address: "Columbia Point Penthouse", price: "$1.7M", status: "Closed" },
    { address: "West Richland Orchard", price: "$1.2M", status: "Just Listed" },
  ];

  return (
    <div className="w-full overflow-hidden bg-primary/5 py-4 border-y border-primary/10">
      <div className="flex animate-ticker whitespace-nowrap">
        {[...deals, ...deals].map((deal, i) => (
          <div key={i} className="inline-flex items-center mx-8">
            <span className="text-[10px] tracking-[0.2em] uppercase text-primary/60 mr-3">
              {deal.status}
            </span>
            <span className="font-display text-sm font-medium text-foreground">{deal.address}</span>
            <span className="mx-3 text-primary/30">/</span>
            <span className="font-serif-accent text-sm text-primary">{deal.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
