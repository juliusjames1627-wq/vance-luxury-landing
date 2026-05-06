## Elena Vance — Luxury Real Estate Landing Page

A single-page, mobile-first marketing site optimized for buyer/seller lead capture, with a premium navy/charcoal/gold aesthetic.

### Page Structure (top to bottom)

1. **Sticky Nav Bar**
   - Left: "ELENA VANCE" wordmark in gold
   - Right (desktop): Listings · About · Testimonials · FAQ · Contact
   - Mobile: hamburger sheet menu
   - Compact "Get Valuation" button on the right

2. **Hero Section**
   - Full-viewport lifestyle background photo of a luxury Tri-Cities home (dark navy gradient overlay for legibility)
   - Eyebrow: "Tri-Cities, WA · Luxury Single-Family Homes"
   - Headline: "Where Premier Homes Meet Discerning Buyers"
   - Subhead: short UVP about white-glove representation, off-market access, and proven results
   - Primary CTA: "Get Your Free Home Valuation" (gold button, scrolls to seller form)
   - Secondary CTA: "Browse Featured Listings" (outline)
   - Small trust strip: "$250M+ Sold · 200+ Families Served · 5★ Rated"

3. **Featured Listings Grid**
   - Section heading: "Featured Listings"
   - 4 property cards in a responsive grid (1 col mobile, 2 col tablet, 4 col desktop)
   - Each card: cover image, clean display name (e.g., "Riverbend Estate — Richland"), price, Beds · Baths · SqFt row, neighborhood, and a plain "View Details" link rendered as a raw URL-style button (no rich text)
   - "View All Listings" link below the grid

4. **About Elena Vance**
   - Two-column on desktop: portrait left, bio right
   - Highlights: years of experience, local expertise, awards, designations
   - Stat tiles: Homes Sold, Avg Days on Market, List-to-Sale %, Volume

5. **Why Work With Us / Value Pillars**
   - 3 pillars with icons: Concierge Marketing · Data-Driven Pricing · Discreet Off-Market Access

6. **Lead Capture — Seller (Home Valuation)**
   - Section heading: "Get Your Free Home Valuation"
   - Plain inputs: Full Name, Email, Phone, Property Address, City, Beds, Baths, Approx. SqFt, Timeline (select), Notes (textarea)
   - Submit button: "Request Valuation"
   - Clean, parseable output (see Technical section)

7. **Lead Capture — Buyer**
   - Side-by-side with seller form on desktop, stacked on mobile
   - Plain inputs: Full Name, Email, Phone, Desired Area, Price Range, Beds, Timeline, Notes
   - Submit: "Start My Search"

8. **Testimonials**
   - 3-card grid with quote, client name, neighborhood, 5-star row
   - Subtle gold quotation mark accent

9. **FAQ**
   - Accordion with 6–8 common questions (commission, valuation accuracy, off-market, timelines, financing referrals, relocation, staging, marketing plan)

10. **Final CTA Band**
    - Navy band with gold CTA: "Ready to make your move? — Schedule a Private Consultation"

11. **Footer**
    - Columns: Brand blurb · Quick Links · Contact (phone, email, office address)
    - Social links rendered as raw text URLs (e.g., `https://instagram.com/elenavance`) — not styled as rich hyperlinks
    - Fine print: brokerage name, license #, equal housing, © year

### Design System

- **Colors** (oklch in `src/styles.css`):
  - Background: deep navy `#0B1A2B`
  - Surface/charcoal: `#1A2433`
  - Foreground: cream `#F5EFE6`
  - Primary (gold): `#C9A567`
  - Muted gold/cream accents for borders and dividers
- **Typography**: Inter (already web-safe); display sizes for hero, generous tracking on eyebrows
- **Spacing**: generous section padding (py-20 md:py-28), max-w-7xl containers
- **Depth**: layered cards with soft shadows, subtle gold hairline borders, image overlays

### Technical Notes (developer-facing)

- Stack: TanStack Start route at `src/routes/index.tsx` (replaces placeholder), reusing existing shadcn/ui components (Button, Card, Input, Label, Textarea, Select, Accordion, Sheet).
- Section components under `src/components/landing/` (Hero, Listings, About, Pillars, SellerForm, BuyerForm, Testimonials, FAQ, FinalCTA, Footer, Nav).
- Theme tokens updated in `src/styles.css` (navy/charcoal/gold) for both root and dark.
- Forms: React state + Zod validation, plain `<input>` types (no input masking on phone — accepts digits/spaces/dashes as-is to keep CRM ingestion clean). On submit, builds a flat object `{ leadType, fullName, email, phone, address, ... , submittedAt }` for easy CSV/CRM mapping. MVP behavior: log to console + show a toast confirmation. No backend yet.
- Images: high-quality Unsplash luxury home photos via direct URLs (no asset imports).
- Fully responsive using Tailwind's standard breakpoints (sm/md/lg/xl).

### Out of Scope for This MVP

- Real CMS-driven listings (cards use static placeholder data)
- Backend submission / email delivery (forms log structured data; wiring to Lovable Cloud or a webhook can be a follow-up)
- Auth, dashboards, IDX/MLS integration
- Multi-page routes (About, Listings detail) — can be added later

### Open Questions (to confirm before/after first build)

1. Listings: use 4 placeholder Tri-Cities properties (Richland, Kennewick, Pasco, West Richland) with stock photos — OK?
2. Hero CTA scroll target: seller valuation form (vs. opening a modal) — OK?
3. Form submissions for MVP: console + toast only, then we wire to Lovable Cloud (Supabase table + email) in a follow-up — OK?
