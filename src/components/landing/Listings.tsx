import { useMemo, useState } from "react";
import img1 from "@/assets/listing-1.jpg";
import img2 from "@/assets/listing-2.jpg";
import img3 from "@/assets/listing-3.jpg";
import img4 from "@/assets/listing-4.jpg";

type Status = "Active" | "Pending" | "Just Sold" | "Off-Market";

const listings = [
  {
    name: "Riverbend Estate",
    city: "Richland",
    region: "Richland",
    price: "$2,450,000",
    beds: 5,
    baths: 5,
    sqft: "5,820",
    img: img1,
    url: "https://elenavance.com/listings/riverbend-estate",
    status: "Active" as Status,
  },
  {
    name: "Stone Manor",
    city: "Kennewick",
    region: "Kennewick",
    price: "$1,895,000",
    beds: 4,
    baths: 4,
    sqft: "4,640",
    img: img2,
    url: "https://elenavance.com/listings/stone-manor",
    status: "Pending" as Status,
  },
  {
    name: "Heritage Craftsman",
    city: "West Richland",
    region: "West Richland",
    price: "$1,375,000",
    beds: 4,
    baths: 3,
    sqft: "3,910",
    img: img3,
    url: "https://elenavance.com/listings/heritage-craftsman",
    status: "Active" as Status,
  },
  {
    name: "Vineyard Ridge",
    city: "Pasco",
    region: "Pasco",
    price: "$2,100,000",
    beds: 5,
    baths: 4,
    sqft: "5,200",
    img: img4,
    url: "https://elenavance.com/listings/vineyard-ridge",
    status: "Off-Market" as Status,
  },
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
    [active],
  );

  return (
    <section id="listings" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <p className="text-[11px] tracking-[0.3em] text-primary uppercase mb-3">
              01 — Curated Inventory
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-[1.05]">
              Featured Listings
            </h2>
          </div>
          <p className="text-foreground/60 max-w-md text-sm md:text-base">
            A hand-selected portfolio of distinctive Tri-Cities homes — from riverfront estates to
            vineyard retreats.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Listing filters">
          {filters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={active === f}
              aria-controls="listings-grid"
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

        <div
          id="listings-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {filtered.map((l, i) => (
            <article
              key={l.name}
              className="group glass-premium border border-border rounded-xl overflow-hidden flex flex-col hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={l.img}
                  alt={l.name}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                />
                <span
                  className={`absolute top-4 left-4 text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-lg font-medium backdrop-blur-md shadow-sm ${statusStyles[l.status]}`}
                >
                  {l.status}
                </span>
              </div>
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div>
                  <h3 className="font-display text-2xl font-light text-foreground group-hover:text-primary transition-colors">
                    {l.name}
                  </h3>
                  <p className="text-sm text-foreground/55 font-light tracking-wide">
                    {l.city}, WA
                  </p>
                </div>
                <p className="text-primary text-2xl font-display font-light">{l.price}</p>
                <div className="text-sm text-foreground/70 flex gap-4 border-t border-border/50 pt-4 font-light">
                  <span className="flex items-center gap-1.5">
                    {l.beds}{" "}
                    <span className="text-[10px] uppercase tracking-wider opacity-60">Beds</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    {l.baths}{" "}
                    <span className="text-[10px] uppercase tracking-wider opacity-60">Baths</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    {l.sqft}{" "}
                    <span className="text-[10px] uppercase tracking-wider opacity-60">SqFt</span>
                  </span>
                </div>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <a
                    href={l.url}
                    className="text-[11px] tracking-widest uppercase text-primary font-medium hover:underline underline-offset-4"
                  >
                    View Dossier
                  </a>
                  <div className="h-px flex-1 bg-border/40 mx-4" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[10px] tracking-widest uppercase text-foreground/45 mb-1">
            Full Inventory
          </p>
          <a
            href="https://elenavance.com/listings"
            className="text-primary font-mono text-sm hover:underline"
          >
            https://elenavance.com/listings
          </a>
        </div>
      </div>
    </section>
  );
}
