import img1 from "@/assets/listing-1.jpg";
import img2 from "@/assets/listing-2.jpg";
import img3 from "@/assets/listing-3.jpg";
import img4 from "@/assets/listing-4.jpg";

const listings = [
  {
    name: "Riverbend Estate",
    city: "Richland, WA",
    price: "$2,450,000",
    beds: 5, baths: 5, sqft: "5,820",
    img: img1,
    url: "https://elenavance.com/listings/riverbend-estate",
  },
  {
    name: "Stone Manor",
    city: "Kennewick, WA",
    price: "$1,895,000",
    beds: 4, baths: 4, sqft: "4,640",
    img: img2,
    url: "https://elenavance.com/listings/stone-manor",
  },
  {
    name: "Heritage Craftsman",
    city: "West Richland, WA",
    price: "$1,375,000",
    beds: 4, baths: 3, sqft: "3,910",
    img: img3,
    url: "https://elenavance.com/listings/heritage-craftsman",
  },
  {
    name: "Vineyard Ridge",
    city: "Pasco, WA",
    price: "$2,100,000",
    beds: 5, baths: 4, sqft: "5,200",
    img: img4,
    url: "https://elenavance.com/listings/vineyard-ridge",
  },
];

export function Listings() {
  return (
    <section id="listings" className="py-20 md:py-28 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 md:mb-16">
          <div>
            <p className="text-xs tracking-[0.3em] text-primary uppercase mb-3">Curated Inventory</p>
            <h2 className="text-3xl md:text-5xl font-light text-foreground">Featured Listings</h2>
          </div>
          <p className="text-foreground/60 max-w-md">
            A hand-selected portfolio of distinctive Tri-Cities homes — from riverfront estates to
            vineyard retreats.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {listings.map((l) => (
            <article key={l.name} className="group bg-card border border-border/60 rounded-md overflow-hidden flex flex-col hover:border-primary/60 transition-colors">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={l.img}
                  alt={l.name}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <div>
                  <h3 className="text-lg font-medium text-foreground">{l.name}</h3>
                  <p className="text-sm text-foreground/60">{l.city}</p>
                </div>
                <p className="text-primary text-xl font-light tracking-wide">{l.price}</p>
                <div className="text-sm text-foreground/70 flex gap-3 border-t border-border/60 pt-3">
                  <span>{l.beds} Beds</span>
                  <span className="text-border">·</span>
                  <span>{l.baths} Baths</span>
                  <span className="text-border">·</span>
                  <span>{l.sqft} SqFt</span>
                </div>
                <div className="mt-auto pt-2">
                  <p className="text-xs text-foreground/50 mb-1">View Details:</p>
                  <a
                    href={l.url}
                    className="text-sm text-primary break-all underline-offset-2 hover:underline font-mono"
                  >
                    {l.url}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-foreground/50 mb-1">View Full Inventory:</p>
          <a href="https://elenavance.com/listings" className="text-primary font-mono text-sm hover:underline">
            https://elenavance.com/listings
          </a>
        </div>
      </div>
    </section>
  );
}
