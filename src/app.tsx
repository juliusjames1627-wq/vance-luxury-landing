import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
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

export default function App() {
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
      <Analytics />
    </div>
  );
}
