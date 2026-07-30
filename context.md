# Sumathi IT Website Context

## 1. Project Summary

Sumathi IT requires a modern, SEO-ready, mobile-responsive corporate website built with Next.js and Tailwind CSS. The immediate requirement is a polished front-end build using JSON-based content for products, blogs, news, case studies, testimonials, and galleries. The architecture must allow a future migration to Supabase CMS without rewriting the front end.

The website represents Sumathi IT as a leading Sri Lankan IT solutions and system integration company under Sumathi Holdings, specializing in enterprise networking, cybersecurity, data center solutions, unified communications, smart infrastructure / ELV, end-user devices, geospatial engineering, UAV solutions, BIM, scanners, GNSS, and digital transformation services.

The website is also connected to Sumathi IT’s 25th anniversary communication. A 25th anniversary badge/image must appear across all pages as a compact animated floating icon on the right-middle side of the viewport. Clicking it must redirect users to the Chairman Message page.

## 2. Core Build Priorities

1. Premium UI/UX with simple, modern layouts.
2. No generic or overused gradient-heavy design.
3. Clean codebase with reusable components and a clear folder structure.
4. SEO-compatible implementation from day one.
5. JSON-based content structure now, CMS-ready later.
6. Poppins font across the website.
7. Subtle animation, hover states, button micro-interactions, and scroll reveal effects.
8. Fully responsive layouts across mobile, tablet, laptop, and desktop.
9. Fast 2-day delivery scope: build polished front-end first; do not over-engineer backend logic.

## 3. Technical Stack

### Required

- Next.js App Router
- TypeScript
- Tailwind CSS
- Poppins via `next/font/google`
- JSON content files for initial content management
- SEO metadata per page
- Responsive layouts
- Reusable UI components

### Recommended Packages

- `motion` for subtle page/section animation
- `lucide-react` for icons
- `clsx` and `tailwind-merge` for class management
- `class-variance-authority` for scalable component variants
- `swiper` only where sliders are necessary
- `shadcn/ui` components for accessible UI building blocks
- `zod`, `react-hook-form`, and `@hookform/resolvers` for contact-form validation
- `next-themes` only if dark mode is required later

## 4. Brand and Visual Direction

### Brand Feel

The website should feel corporate, trusted, advanced, precise, and service-oriented. It must not look like a generic IT template. The experience should communicate enterprise confidence and technical capability.

### Color Direction

Primary direction:

- Deep navy
- Corporate blue
- White
- Cool grey
- Soft neutral surfaces
- Controlled accent blue or violet-blue where needed

Avoid:

- Loud multi-color gradients
- Excessive neon effects
- Overcrowded sections
- Template-like gradient hero blocks
- Too many competing accent colors

### UI Style

- Large clean headings
- Rounded premium cards
- Soft borders
- Strong whitespace
- Clear content hierarchy
- Icon-led feature cards
- Smooth hover lifts
- Minimal motion
- Enterprise-level visual discipline

## 5. Main Navigation

Header structure:

- Company Logo
- Home
- Enterprise Solutions
  - Networking Solutions
  - Unified Communication Solutions
  - Data Center Solution
  - Information Security Solution
  - Smart Infrastructure / ELV Solution
- UAV Solutions
  - Drones
  - Softwares
  - GNSS
  - BIM
  - Scanners
  - UAV Services
- End User Devices
- Case Studies
- Gallery
- About Us
- Contact Us
- Hotline: 0115 583 311

### Header Behavior

- Desktop: horizontal navigation with dropdown mega menus.
- Mobile: hamburger sheet/menu with collapsible submenus.
- Sticky header with subtle blur or solid white background after scroll.
- CTA button or hotline visible on desktop.
- Keep the header lightweight and fast.

## 6. Global Website Elements

### Floating Anniversary Icon

- Position: fixed right-middle side of every page.
- Behavior: soft blinking/pulse/magnetic floating motion.
- Click action: redirects to `/chairman-message`.
- Must not block page content on mobile.
- On mobile, reduce size and place above WhatsApp floating icon.

### WhatsApp Floating Button

- Global visibility.
- Suggested link: `https://wa.me/94771234567`
- Label: WhatsApp Us
- Number: +94 77 1234567

### Scroll-Up Button

- Visible after user scrolls down.
- Fixed bottom-right area.
- Must not overlap WhatsApp button.

### Breadcrumbs

Breadcrumbs must be included on all inner pages.

Example:

`Home / Enterprise Solutions / Networking Solutions`

Breadcrumbs improve navigation clarity, especially for product, UAV, blog, and case-study pages.

## 7. Company Information

Company: Sumathi IT

Address: 532/2, Sirikotha Lane, Colombo

Email: info@sumathiit.com

Main Contact: +94 115 553 311

CTA Contact Number: +94 112273757

WhatsApp: +94 77 1234567

## 8. Page Requirements

## 8.1 Home Page

### Sections

1. Hero section
   - Modern, simple, corporate.
   - Use available images intelligently.
   - Avoid too many colors.
   - Add strong CTA buttons.
   - Recommended CTAs:
     - Explore Solutions
     - Talk to an Expert

2. Company logo / partner slider
   - Use available client/vendor icons.
   - Keep it subtle and clean.

3. Why Sumathi IT
   - Explain trust, expertise, vendor partnerships, end-to-end delivery, island-wide support.
   - Use 4–6 cards.

4. Enterprise Solutions preview
   - Link to key solution pages.

5. UAV Solutions preview
   - Highlight drones, GNSS, BIM, scanners, software, and UAV services.

6. News and Blog slider
   - Pull content from JSON.

7. Contact CTA strip
   - “Need the right IT solution for your business?”
   - Call / WhatsApp / Contact button.

8. Footer
   - Newsletter form
   - Quick links
   - Contact details
   - Solution links
   - Social links if available

## 8.2 Enterprise Solutions Page

### Main Page Content

Title:

Enterprise Solutions – Future-Ready IT Infrastructure for Your Business

Key points:

- 18+ Years of Expertise in deploying mission-critical IT systems
- Vendor-Agnostic Approach – We match solutions to your needs, not the other way around
- End-to-End Support from design to implementation and ongoing management
- Proven Track Record across banking, healthcare, government, and manufacturing sectors

Description:

Sumathi IT delivers cutting-edge Enterprise Solutions to empower businesses with robust, scalable, and secure IT infrastructure. Our comprehensive offerings, in partnership with leading global brands, cater to diverse organizational needs, ensuring seamless operations, enhanced productivity, and future-ready technology. Explore our key solutions below, designed to transform your enterprise.

### Solution Cards

- Networking Solutions
- Unified Communication Solutions
- Data Center Solution
- Information Security Solution
- Smart Infrastructure / ELV Solution

Each card must link to an individual solution page.

### Individual Enterprise Solution Pages

Each page must include:

- Hero section
- Breadcrumb
- Overview
- Key benefits
- Solution capabilities
- Industries served
- Related enterprise solutions
- CTA section
- SEO metadata

## 8.3 UAV Solutions Page

Main UAV page must work like a product/category hub.

### Categories

- Drones
- Softwares
- GNSS
- BIM
- Scanners
- UAV Services

### Drone Page Special Requirement

The drones page must include:

- Top hero with drone flying video
- Drone product grid from JSON
- Animated drone cards
- CTA block for consultation
- Product comparison table section
- Related products section

### Product Detail Page

All UAV-related products must use a shared product detail route.

The product detail page must include:

- Product hero
- Image slider/gallery
- Description
- Key feature unordered list
- Technical specifications
- Additional information
- CTA contact section
- Related products
- SEO metadata

### Drone Comparison Table

Use the following comparison features:

- Recharge time
- Take-off time
- Drone autonomy
- Protection class
- Temperature range
- Sealing system
- Base and mounting
- Precise landing
- RTK relay compatibility
- Mobile deployment (vehicle)
- Anti-vibration system
- Obstacle detection sensors
- Security and geocaging
- Thermal management

UI behavior:

- User can select Drone 1 and Drone 2.
- Table updates based on selected drones.
- Keep logic simple and JSON-driven.

## 8.4 End User Devices Page

### Core Content Direction

Sumathi IT supplies reliable end-user devices for business, creative, field, and high-performance computing needs.

### Offerings

- Business, gaming, and ultraportable laptops
- Desktops and workstations custom-built for CAD, AI, and multimedia
- Tablets and hybrid devices for fieldwork and presentations

### Top Brands

- HP
- Dell
- Lenovo
- Apple MacBooks
- ASUS
- MSI

### Sections

- Hero
- Offerings cards
- Brand section
- Device-use cases
- CTA for quotation
- Related services

## 8.5 Case Studies Page

Use JSON-based content.

### Main Page

- Case-study listing grid
- Filter by industry or solution if time allows
- Featured case study card

### Detail Page

Each case study should include:

- Challenge
- Solution
- Implementation
- Results
- Technologies used
- CTA
- SEO metadata

## 8.6 News and Blog Pages

Use JSON-based content.

### Listing Page

- Blog/news cards
- Category tags
- Date
- Author if available

### Detail Page

- Article heading
- Featured image
- Reading time
- Content sections
- Related posts
- SEO metadata

## 8.7 Gallery Page

- Display company images in a clean masonry or responsive grid.
- Add subtle reveal animations.
- Use image alt text and captions where relevant.
- Include SEO metadata.

## 8.8 About Us Page

### Required Content

- Company introduction
- Vision
- Mission
- Chairman / leadership images
- Customer testimonials
- Counters

### Counters

- Customer Satisfaction
- Years Proven Track Record
- Projects Completed
- Partnerships

### UX Notes

- Counters must animate only when in viewport.
- Keep testimonial cards credible and not overdesigned.

## 8.9 Contact Us Page

### Required Fields

- Name
- Phone number
- Email
- What can we help you with?
  - Networking and System Integration
  - Data Center Solution
  - Information Security
  - Unified Communication
  - Smart Infrastructure
  - Managed Services
  - End User Devices
  - Repairing

### Front-End Limitation

Because the initial build has no backend, the contact form should either:

1. Open a prefilled email using `mailto:info@sumathiit.com`, or
2. Store a placeholder submit handler and clearly mark it for future API/Supabase/email integration.

Do not fake successful backend submission unless an email API/server route is implemented.

## 8.10 Chairman Message Page

Triggered by clicking the 25th anniversary floating icon.

### Sections

- Anniversary hero
- Chairman image
- Chairman message content
- 25-year milestone narrative
- CTA back to company/about page

## 9. SEO Requirements

Every page must include:

- Unique title
- Unique meta description
- Keywords array
- Open Graph title and description
- Open Graph image where available
- Canonical URL
- Clean semantic heading structure
- Image alt text
- Breadcrumb UI
- JSON-LD schema where suitable
- Sitemap and robots setup

Recommended schema types:

- Organization
- LocalBusiness
- Service
- Product
- Article
- BreadcrumbList

## 10. JSON Content Strategy

JSON must be structured to support future CMS migration.

### Suggested Data Files

- `src/data/site.ts`
- `src/data/navigation.ts`
- `src/data/enterprise-solutions.ts`
- `src/data/uav-categories.ts`
- `src/data/products.ts`
- `src/data/blogs.ts`
- `src/data/news.ts`
- `src/data/case-studies.ts`
- `src/data/testimonials.ts`
- `src/data/gallery.ts`
- `src/data/faqs.ts`

### Content Rules

- Every item must have a `slug`.
- Every image must have `src`, `alt`, and optional `caption`.
- Every SEO-supported item must have `seoTitle`, `seoDescription`, and `keywords`.
- Product specifications must be normalized enough for comparison tables.

## 11. Component Strategy

Use reusable components to reduce code repetition.

### Global Components

- Header
- Footer
- MegaMenu
- MobileMenu
- Breadcrumbs
- SectionHeader
- Container
- CTASection
- FloatingWhatsApp
- ScrollToTop
- AnniversaryFloatingBadge
- AnimatedButton
- Reveal
- SEOJsonLd

### Page Components

- HeroSection
- LogoSlider
- WhySumathiSection
- SolutionCard
- ProductCard
- ProductGallery
- ProductComparisonTable
- BlogCard
- CaseStudyCard
- TestimonialCard
- CounterCard
- GalleryGrid
- ContactForm

## 12. Animation Direction

Use motion carefully. The website is corporate, not entertainment.

Recommended animations:

- Fade-up section reveal
- Card hover lift
- Button text slide/reveal micro-interaction
- Mega menu soft fade/drop
- Floating anniversary badge pulse
- Image reveal on scroll
- Counter animation in viewport
- Smooth accordion open/close

Avoid:

- Heavy parallax everywhere
- Too many moving backgrounds
- Large animation delays
- Animations that slow mobile performance
- Motion that distracts from content

## 13. Performance Rules

- Use Next Image for images.
- Compress images before production.
- Keep sliders limited.
- Do not animate large full-screen images unnecessarily.
- Avoid loading heavy libraries for simple effects.
- Use server components by default.
- Use client components only when interactivity is required.
- Lazy-load below-the-fold visual-heavy sections where practical.

## 14. Recommended Folder Structure

```txt
sumathi-it-web/
├── public/
│   ├── images/
│   │   ├── logo/
│   │   ├── hero/
│   │   ├── partners/
│   │   ├── enterprise/
│   │   ├── uav/
│   │   ├── products/
│   │   ├── gallery/
│   │   ├── team/
│   │   └── anniversary/
│   └── videos/
│       └── uav/
├── src/
│   ├── app/
│   │   ├── (site)/
│   │   │   ├── page.tsx
│   │   │   ├── enterprise-solutions/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── uav-solutions/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [category]/page.tsx
│   │   │   ├── products/
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── end-user-devices/page.tsx
│   │   │   ├── case-studies/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── news/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── gallery/page.tsx
│   │   │   ├── about-us/page.tsx
│   │   │   ├── chairman-message/page.tsx
│   │   │   └── contact-us/page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   ├── sections/
│   │   ├── cards/
│   │   ├── forms/
│   │   ├── product/
│   │   └── ui/
│   ├── data/
│   │   ├── site.ts
│   │   ├── navigation.ts
│   │   ├── enterprise-solutions.ts
│   │   ├── uav-categories.ts
│   │   ├── products.ts
│   │   ├── blogs.ts
│   │   ├── news.ts
│   │   ├── case-studies.ts
│   │   ├── testimonials.ts
│   │   └── gallery.ts
│   ├── lib/
│   │   ├── seo.ts
│   │   ├── utils.ts
│   │   ├── constants.ts
│   │   └── routes.ts
│   ├── types/
│   │   ├── site.ts
│   │   ├── product.ts
│   │   ├── solution.ts
│   │   └── content.ts
│   └── styles/
│       └── tokens.css
├── .env.local.example
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## 15. Two-Day Build Execution Plan

### Day 1

1. Create Next.js project.
2. Install packages.
3. Configure Tailwind, Poppins, global design tokens.
4. Create layout, header, footer, floating WhatsApp, scroll-up, anniversary badge.
5. Create JSON data files.
6. Build home page.
7. Build enterprise solutions main page and detail pages.
8. Build UAV main page and product grid.

### Day 2

1. Build product detail pages.
2. Build drone comparison table.
3. Build blog/news listing and detail pages.
4. Build case-study listing and detail pages.
5. Build about, gallery, contact, chairman-message pages.
6. Add SEO metadata, sitemap, robots, Open Graph defaults.
7. Mobile QA.
8. Final polish: hover states, spacing, responsive fixes, performance pass.

## 16. Critical Risks

1. Trying to build a CMS in the first 2 days will damage delivery quality.
2. Contact-form email cannot truly work without backend/API/email provider.
3. Too many sliders will reduce performance and look less premium.
4. Too many animations will make the website feel cheap.
5. Generic gradients will weaken the enterprise brand feel.
6. Poor JSON structure now will make Supabase migration painful later.
7. SEO cannot be added only at the end; metadata must be planned per page.

## 17. Definition of Done

The front-end is ready when:

- All required pages exist.
- Navigation and dropdowns work on desktop and mobile.
- JSON-driven content renders correctly.
- Dynamic pages work using slugs.
- Product detail pages render from JSON.
- Drone comparison works from JSON.
- Contact form has a clear front-end submission path.
- SEO metadata exists for all key pages.
- Sitemap and robots are configured.
- The site is mobile responsive.
- Poppins is applied globally.
- The floating 25th anniversary icon appears on all pages.
- WhatsApp and scroll-up buttons work globally.
- UI feels modern, clean, and credible for a Sri Lankan enterprise IT company.
