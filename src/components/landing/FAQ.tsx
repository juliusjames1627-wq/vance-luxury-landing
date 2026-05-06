import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How accurate is the free home valuation?", a: "Each valuation is prepared personally using current MLS comparables, recent off-market sales, and an in-person walk-through when possible — not an automated estimate." },
  { q: "Do you work with off-market listings?", a: "Yes. A meaningful share of our luxury volume closes off-market through our private buyer network. Ask us about current quiet inventory." },
  { q: "What is your typical commission structure?", a: "Commission is negotiated on each engagement and disclosed in writing before any agreement is signed. We're transparent about fees and what they fund." },
  { q: "How long does a luxury home typically take to sell in Tri-Cities?", a: "Properly priced, professionally marketed luxury homes in our service area average 18 days on market — well below the regional norm." },
  { q: "Can you help with relocation to or from Tri-Cities?", a: "Absolutely. We coordinate with vetted partner agents nationwide and handle the full Tri-Cities side end-to-end." },
  { q: "Do you offer staging and pre-listing improvements?", a: "Yes — our listing prep program includes staging consultation, recommended trades, and selective pre-list improvements that drive measurable returns." },
  { q: "Will I work with Elena directly?", a: "Yes. Elena is the principal point of contact on every engagement, supported by a small specialist team for marketing, transactions, and concierge logistics." },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 border-t border-border">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12">
          <p className="text-[11px] tracking-[0.3em] text-primary uppercase mb-3">08 — Frequently Asked</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">Questions, answered.</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline font-medium">{f.q}</AccordionTrigger>
              <AccordionContent className="text-foreground/70 leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
