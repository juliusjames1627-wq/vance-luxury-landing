import { useMemo, useState } from "react";
import img1 from "@/assets/listing-1.jpg";
import img2 from "@/assets/listing-2.jpg";
import img3 from "@/assets/listing-3.jpg";
import img4 from "@/assets/listing-4.jpg";

type Status = "Active" | "Pending" | "Just Sold" | "Off-Market";

const listings = [
  { name: "Riverbend Estate", city: "Richland", region: "Richland", price: "$2,450,000", beds: 5, baths: 5, sqft: "5,820", img: img1, url: "https://elenavance.com/listings/riverbend-estate", status: "Active" as Status },
  { name: "Stone Manor", city: "Kennewick", region: "Kennewick", price: "$1,895,000", beds: 4, baths: 4, sqft: "4,640", img: img2, url: "https://elenavance.com/listings/stone-manor", status: "Pending" as Status },
  { name: "Heritage Craftsman", city: "West Richland", region: "West Richland", price: "$1,375,000", beds: 4, baths: 3, sqft: "3,910", img: img3, url: "https://elenavance.com/listings/heritage-craftsman", status: "Active" as Status },
  { name: "Vineyard Ridge", city: "Pasco", region: "Pasco", price: "$2,100,000", beds: 5, baths: 4, sqft: "5,200", img: img4, url: "https://elenavance.com/listings/vineyard-ridge", status: "Off-Market" as Status },
];

const filters = ["All", "Richland", "Kennewick", "Pasco", "West Richland"] as const;

const statusStyles: Record<Status, string> = {
  Active: "bg-primary text-primary-foreground",
  Pending: "bg-accent text-accent-foreground",
  "Just Sold": "bg-foreground text-background",
  "Off-Market": "bg-card text-foreground border border-foreground/30",
};

export function Listings() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const filtered = useMemo(
    () => (active === "All" ? listings : listings.filter((l) => l.region === active)),
    [active]
  );

  return (
    <section id="listings" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <p className="text-[11px] tracking-[0.3em] text-primary uppercase mb-3">01 — Curated Inventory</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-[1.05]">Featured Listings</h2>
          </div>
          <p className="text-foreground/60 max-w-md text-sm md:text-base">
            A hand-selected portfolio of distinctive Tri-Cities homes — from riverfront estates to vineyard retreats.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-1.5 text-xs tracking-wider uppercase rounded-full border transition-colors ${
                active === f
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-foreground/65 hover:text-foreground hover:border-foreground/40"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filtered.map((l) => (
            <article key={l.name} className="group bg-card border border-border rounded-sm overflow-hidden flex flex-col hover:border-primary/60 transition-colors">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={l.img} alt={l.name} loading="lazy" width={1024} height={768} className="h-full w-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
                <span className={`absolute top-3 left-3 text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 rounded-sm ${statusStyles[l.status]}`}>
                  {l.status}
                </span>
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <div>
                  <h3 className="font-display text-xl font-normal text-foreground">{l.name}</h3>
                  <p className="text-sm text-foreground/55">{l.city}, WA</p>
                </div>
                <p className="text-primary text-2xl font-display font-light">{l.price}</p>
                <div className="text-sm text-foreground/70 flex gap-3 border-t border-border pt-3">
                  <span>{l.beds} Beds</span>
                  <span className="text-border">·</span>
                  <span>{l.baths} Baths</span>
                  <span className="text-border">·</span>
                  <span>{l.sqft} SqFt</span>
                </div>
                <div className="mt-auto pt-2">
                  <p className="text-[10px] tracking-widest uppercase text-foreground/45 mb-1">View Details</p>
                  <a href={l.url} className="text-xs text-primary break-all underline-offset-2 hover:underline font-mono">
                    {l.url}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[10px] tracking-widest uppercase text-foreground/45 mb-1">Full Inventory</p>
          <a href="https://elenavance.com/listings" className="text-primary font-mono text-sm hover:underline">
            https://elenavance.com/listings
          </a>
        </div>
      </div>
    </section>
  );
}
