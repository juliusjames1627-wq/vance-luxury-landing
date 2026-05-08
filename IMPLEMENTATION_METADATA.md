# Implementation Plan: Metadata & Social Optimization

This document details the strategy for replacing generic platform metadata with a robust, high-end SEO and social media configuration for the **Vance Luxury Landing** page.

## 1. Visual Identity (Open Graph Image)

The current default preview (Lovable/Bolt) will be replaced with a high-fidelity brand snapshot.

- **Status**: Generated & Deployed
- **File**: `public/og-image.png` (1200x630)
- **Concept**: A premium modern architectural home at sunset, featuring the "Elena Vance | Luxury Real Estate" branding in a sophisticated serif typeface.

## 2. Global Metadata Architecture (`index.html`)

The app is a Vite SPA (not TanStack Router). Site-wide metadata lives in the document head.

### Implemented in `index.html`:
- `viewport` & `charset` (essential)
- `og:site_name`: "Elena Vance Luxury Real Estate"
- `og:type`: "website"
- `twitter:card`: "summary_large_image"
- `twitter:site`: "@elenavance"

## 3. Page-Specific Optimization (landing — `index.html`)

### Metadata specification (live):
- **Title**: `Elena Vance | Luxury Real Estate in Tri-Cities, WA`
- **Description**: `Premier representation for luxury single-family homes in Richland, Kennewick, Pasco, and West Richland. Experience white-glove service and exclusive off-market access.`
- **Keywords**: `luxury real estate Tri-Cities, Richland WA luxury homes, Elena Vance real estate, Kennewick waterfront property, Pasco luxury listings` (+ West Richland)
- **OG/Twitter Image**: `https://elenavance.com/og-image.png`

## 4. Technical SEO & Schema

- **Canonical URL**: `<link rel="canonical" href="https://elenavance.com/" />` in `index.html`.
- **JSON-LD** (inline in `index.html`):
  - `Organization` with address, sameAs, logo/image → `og-image.png`
  - `RealEstateAgent` (Elena Vance) with `worksFor` → organization, `areaServed` → Tri-Cities cities
  - `ItemList` of featured `SingleFamilyResidence` listings with `Offer` (aligned with `Listings.tsx`)

## 5. Execution Steps

1. [x] Create `public/` directory and move `og-image.png` into it.
2. [x] Establish metadata foundation in `index.html` (replaces legacy `__root.tsx` plan).
3. [x] Landing SEO and social tags in `index.html`.
4. [x] `public/robots.txt` and `public/sitemap.xml` for crawlers.
