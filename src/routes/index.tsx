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

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Elena Vance | Luxury Real Estate in Tri-Cities, WA" },
      { name: "description", content: "Premier representation for luxury single-family homes in Richland, Kennewick, Pasco, and West Richland. Free home valuations and off-market access." },
      { property: "og:title", content: "Elena Vance | Luxury Real Estate in Tri-Cities, WA" },
      { property: "og:description", content: "White-glove real estate for high-ticket Tri-Cities homes." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased pb-20 lg:pb-0">
      <Nav />
      <main>
        <Hero />
        <Press />
        <Listings />
        <RecentlySold />
        <Neighborhoods />
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
      <Toaster position="top-center" />
    </div>
  );
}
