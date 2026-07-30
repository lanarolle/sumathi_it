# Sumathi IT Next.js Frontend

Modern Next.js frontend for Sumathi IT with a production-focused UI refresh, SEO-ready routes, JSON-managed content, responsive layouts, UAV/product pages, drone comparison table, case studies, news, gallery, contact page, floating WhatsApp action, scroll controls, animated 25th anniversary badge, and CMS-ready data structure.

## Latest UI Enhancements Included

- Professional sticky header with aligned navigation and right-side company info drawer
- Purple-led premium UI theme with controlled gold anniversary styling
- Improved cards, hover states, button word-flip animation, and scroll reveal effects
- Gold/black/white 25th anniversary floating badge and enhanced anniversary page
- Enhanced product detail pages with consultation CTA near product information
- Animated about-page counters with icons
- Real WhatsApp floating icon and improved scroll-up / scroll-down buttons
- Scroll progress indicator and tech-style loading screen
- Improved footer layout and contact form UI
- Favicon placeholder added at `public/favicon.svg`

## Quick Start

```bash
npm install
npm run dev
```

or with pnpm:

```bash
pnpm install
pnpm dev
```

Open: `http://localhost:3000`

## Build

```bash
npm run build
npm run start
```

## Content Management Now

Current content is stored in TypeScript data files inside:

```txt
src/data
```

This keeps the frontend CMS-ready for future Supabase integration.

## Main Editable Areas

- Company details: `src/data/site.ts`
- Navigation: `src/data/navigation.ts`
- Enterprise solutions: `src/data/enterprise-solutions.ts`
- UAV categories: `src/data/uav-categories.ts`
- Products/drones/software/GNSS/BIM/scanners: `src/data/products.ts`
- News/blogs: `src/data/blogs.ts`
- Case studies: `src/data/case-studies.ts`
- Gallery: `src/data/gallery.ts`
- Testimonials: `src/data/testimonials.ts`

## Image Replacement

Replace placeholder SVGs inside:

```txt
public/images
```

Keep the same file names if you want to avoid code changes.

## Important Phase 01 Note

The contact form currently uses `mailto:` because this is frontend-only. For real form submission, add a Next.js route handler, Supabase table, or email provider integration in Phase 02.
