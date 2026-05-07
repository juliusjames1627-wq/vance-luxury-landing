# Implementation Plan: Metadata & Social Optimization

This document details the strategy for replacing generic platform metadata with a robust, high-end SEO and social media configuration for the **Vance Luxury Landing** page.

## 1. Visual Identity (Open Graph Image)

The current default preview (Lovable/Bolt) will be replaced with a high-fidelity brand snapshot.

- **Status**: Generated & Deployed
- **File**: `public/og-image.png` (1200x630)
- **Concept**: A premium modern architectural home at sunset, featuring the "Elena Vance | Luxury Real Estate" branding in a sophisticated serif typeface.

## 2. Global Metadata Architecture (`src/routes/__root.tsx`)

We will centralize site-wide metadata in the root route to ensure consistency and remove generic branding.

### Changes to `__root.tsx`:
- **Remove**: Generic `{ title: "Lovable App" }` and related tags.
- **Add**: 
  - `viewport` & `charSet` (essential)
  - `og:site_name`: "Elena Vance Luxury Real Estate"
  - `og:type`: "website"
  - `twitter:card`: "summary_large_image"
  - `twitter:site`: "@elenavance"

## 3. Page-Specific Optimization (`src/routes/index.tsx`)

The landing page will have deep metadata tailored for luxury real estate keywords in Tri-Cities, WA.

### Metadata Specification:
- **Title**: `Elena Vance | Luxury Real Estate in Tri-Cities, WA`
- **Description**: `Premier representation for luxury single-family homes in Richland, Kennewick, Pasco, and West Richland. Experience white-glove service and exclusive off-market access.`
- **Keywords**: `luxury real estate Tri-Cities, Richland WA luxury homes, Elena Vance real estate, Kennewick waterfront property, Pasco luxury listings`
- **OG/Twitter Image**: Reference `/og-image.png`

## 4. Technical SEO & Schema

- **Canonical URL**: Ensure `<link rel="canonical" href="https://elenavance.com" />` is present.
- **JSON-LD Schema**:
  - Maintain and enhance the `RealEstateAgent` schema.
  - Add `Organization` schema for brand authority.
  - Ensure `image` property in schema points to the new `og-image.png`.

## 5. Execution Steps

1. [x] Create `public/` directory and move `og-image.png` into it.
2. [ ] Update `src/routes/__root.tsx` to establish the new metadata foundation.
3. [ ] Update `src/routes/index.tsx` to inject the full suite of SEO and social tags.
4. [ ] (Optional) Generate a `robots.txt` file in `public/` to guide search crawlers.
