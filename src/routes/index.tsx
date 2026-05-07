import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Press } from "@/components/landing/Press";
import { Listings } from "@/components/landing/Listings";
import { RecentlySold } from "@/components/landing/RecentlySold";
import { Neighborhoods } from "@/components/landing/Neighborhoods";
import { Process } from "@/components/landing/Process";
import { About } from "@/components/landing/About";
import { Pillars } from "@/components/landing/Pillars";
import { LeadForms } from "@/components/landing/LeadForms";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { StickyMobileCTA } from "@/components/landing/StickyMobileCTA";
import { FloatingTrustBadge } from "@/components/landing/FloatingTrustBadge";
import { VideoSpotlight } from "@/components/landing/VideoSpotlight";
import { MarketReport } from "@/components/landing/MarketReport";
import { AreaOverview } from "@/components/landing/AreaOverview";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Elena Vance | Luxury Real Estate in Tri-Cities, WA" },
      {
        name: "description",
        content:
          "Premier representation for luxury single-family homes in Richland, Kennewick, Pasco, and West Richland. Free home valuations and off-market access.",
      },
      { property: "og:title", content: "Elena Vance | Luxury Real Estate in Tri-Cities, WA" },
      {
        property: "og:description",
        content: "White-glove real estate for high-ticket Tri-Cities homes.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: "Elena Vance Real Estate",
          image: "https://elenavance.com/og-image.png",
          telephone: "(509) 555-0142",
          url: "https://elenavance.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1200 Columbia Center Blvd",
            addressLocality: "Kennewick",
            addressRegion: "WA",
            postalCode: "99336",
            addressCountry: "US",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 46.2112,
            longitude: -119.2008,
          },
          priceRange: "$$$$",
          areaServed: ["Richland", "Kennewick", "Pasco", "West Richland"],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased pb-20 lg:pb-0 subtle-grain">
      <Nav />
      <main>
        <Hero />
        <VideoSpotlight />
        <Press />
        <Listings />
        <RecentlySold />
        <Neighborhoods />
        <MarketReport />
        <AreaOverview />
        <Pillars />
        <Process />
        <About />
        <LeadForms />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
      <FloatingTrustBadge />
      <Toaster position="top-center" />
    </div>
  );
}
