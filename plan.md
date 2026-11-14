# KAPI KAVACH SERVICES PVT. LTD. — Corporate Website Plan

## Overview

Premium enterprise corporate website for **KAPI KAVACH SERVICES PVT. LTD.** — a Verification, Investigation, Risk Management, Audit and Collection services firm for BFSI and Corporate clients.

**Goal:** Make a Bank or NBFC executive immediately think *"This company looks credible enough to handle our verification operations."*

**Primary objective:** Lead Generation.

---

## 1. Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 19 + TypeScript (strict) |
| Bundler | Vite 6 |
| Routing | React Router v7 |
| Styling | TailwindCSS v3 + CSS variables |
| UI Primitives | ShadCN-style (Radix) |
| Animations | Framer Motion + Lenis (smooth scroll) |
| Carousel | Embla Carousel |
| Forms | React Hook Form + Zod |
| Icons | Lucide React |
| Toasts | Sonner |
| Notifications | EmailJS (contact forms) |

### Dependencies (audited — only what's used)

**Production:**
`react`, `react-dom`, `react-router-dom`, `framer-motion`, `lenis`, `lucide-react`, `react-countup`, `react-hook-form`, `@hookform/resolvers`, `zod`, `sonner`, `@emailjs/browser`, `clsx`, `tailwind-merge`, `class-variance-authority`, `embla-carousel-react`, `embla-carousel-autoplay`, `@radix-ui/react-accordion`, `@radix-ui/react-dialog`, `@radix-ui/react-select`, `@radix-ui/react-tooltip`

**Dev:**
`typescript`, `vite`, `@vitejs/plugin-react`, `tailwindcss`, `postcss`, `autoprefixer`, `lightningcss`, `@types/node`, `@types/react`, `@types/react-dom`

**Removed as unused:** `gsap`, `react-icons`, `@radix-ui/react-avatar`, `react-checkbox`, `react-dropdown-menu`, `react-label`, `react-navigation-menu`, `react-separator`, `react-toggle`, `eslint`, `prettier`, `prettier-plugin-tailwindcss`

---

## 2. Folder Structure

```
klaud/
├── index.html
├── vite.config.ts           # single config (root)
├── tsconfig.json            # single config, noEmit, no references
├── tailwind.config.ts
├── postcss.config.js
├── package.json
├── plan.md
├── public/                  # favicon, robots.txt, sitemap.xml, webmanifest
└── src/
    ├── main.tsx             # entry
    ├── App.tsx              # RouterProvider
    ├── providers.tsx        # Theme + Modal + Lenis + Toaster
    ├── router.tsx           # lazy routes
    ├── styles/globals.css   # CSS vars, dark/light tokens, base styles
    ├── types/               # common, content, navigation, seo, forms, emailjs
    ├── lib/                 # utils, constants, animations, seo (JSON-LD)
    ├── hooks/               # useScrollReveal, useMediaQuery, useScrollDirection, useReducedMotion, useLockedBody, useDebounce
    ├── context/             # ThemeContext, ModalContext
    ├── schemas/             # Zod validation (contact, callback, quote, newsletter)
    ├── data/                # services, industries, team, testimonials, faq, stats, values, coverage, navigation
    ├── services/            # api, contact, content, newsletter (CMS-ready)
    ├── components/
    │   ├── ui/              # button, card, badge, input, textarea, dialog, accordion, sheet, select, tooltip, separator, skeleton
    │   ├── layout/          # RootLayout, Header(+MegaMenu, MobileNav), Footer, Section, Container, BackToTop
    │   ├── common/          # SectionHeading, ServiceCard, IndustryCard, InsightCard, TeamMemberCard, TestimonialCard, ProcessStep, AnimatedCounter, SocialLinks, Breadcrumbs, SvgDivider, MagneticButton
    │   ├── animations/      # ScrollReveal, StaggerContainer, FadeIn, SlideIn
    │   ├── forms/           # ContactForm
    │   └── sections/        # hero, stats, about, services, why-us, industries, coverage, process, testimonials, team, insights, faq, cta
    └── features/
        ├── theme/           # ThemeProvider, ThemeToggle, useTheme
        ├── modals/          # RequestCallbackModal, QuoteRequestModal
        ├── seo/             # MetaTags
        ├── whatsapp/        # FloatingWhatsApp
        ├── loading/         # LoadingScreen
        ├── newsletter/      # NewsletterForm
        └── cookies/         # CookieConsent
```

---

## 3. Routes

| Path | Page | Lazy |
|---|---|---|
| `/` | Home | ✅ |
| `/about` | About | ✅ |
| `/services` | Services | ✅ |
| `/industries` | Industries | ✅ |
| `/coverage` | Coverage | ✅ |
| `/leadership` | Leadership | ✅ |
| `/careers` | Careers | ✅ |
| `/contact` | Contact | ✅ |
| `/privacy-policy` | Privacy | ✅ |
| `/terms` | Terms | ✅ |
| `*` | NotFound (404) | ✅ |

---

## 4. Design System

### Brand Colors
```
Primary Navy   #082B63
Secondary Green #168B45  (accent only: buttons, icons, links, stats, active states)
Dark BG        #081624
Light BG       #F7F9FC
```

### Section Background Rhythm (Home)
```
Hero          → navy gradient
TrustStats    → #081624 dark
About         → adaptive white/dark
Services      → NAVY #082B63
Why Choose Us → adaptive gray
Industries    → adaptive white/dark
Coverage      → NAVY #082B63
Process       → navy gradient
Testimonials  → adaptive gray
Leadership    → adaptive white/dark
Insights      → NAVY #082B63
FAQ           → adaptive gray
CTA           → #081624 dark
```

### Theme Tokens (CSS variables)
- `--bg-primary` / `--bg-secondary` / `--bg-tertiary`
- `--text-primary` / `--text-secondary` / `--text-tertiary`
- `--border-color`, `--glass-bg`, `--glass-border`
- `--shadow-card`, `--shadow-card-hover`, `--shadow-glass`
- `.dark` class on `<html>` flips all tokens via CSS variable override

### Key Principle
- **Adaptive sections** (`bg-[var(--...)]`) use theme-aware text via the same variables — never hardcode light colors.
- **Fixed navy sections** (`#082B63`) always use white text (`light` prop on headings).
- This is what makes dark/light toggle work correctly.

---

## 5. Home Page Sections

1. **Navbar** — glass, sticky, mega menu, theme toggle, CTAs
2. **Hero** — canvas particle network, rich navy gradient, eyebrow, headline, CTAs, trust bar
3. **Trust Stats** — 6 animated counters on dark
4. **About Preview** — story + Mission/Vision/Values cards
5. **Services Grid** — 17 service cards, category filter pills, hover expand
6. **Why Choose Us** — 8 benefit cards
7. **Industries Served** — 10 industry cards
8. **Coverage Map** — 11 state cards with hover tooltips
9. **Process Timeline** — 6-step numbered vertical timeline
10. **Testimonials** — Embla carousel with ratings, avatars, dots
11. **Leadership Preview** — 2 executive cards
12. **Insights Grid** — 3 blog/insight cards
13. **FAQ** — Radix accordion
14. **CTA** — "Let's Secure Your Business Together"

---

## 6. Key Features

- Dark/Light theme toggle (persisted in localStorage)
- Lenis smooth scrolling
- Page transitions (Framer Motion AnimatePresence)
- Route-level code splitting (React.lazy)
- Mega menu + mobile drawer navigation
- Contact/callback/quote forms with Zod validation
- Floating WhatsApp button
- Back-to-top button
- Cookie consent banner
- Newsletter signup
- SEO: MetaTags, JSON-LD schemas, sitemap, robots.txt

---

## 7. Performance

- Route-level code splitting
- Vendor chunking (react, animations, ui, forms)
- CSS minified via lightningcss
- `tsc --noEmit` before build (no emit artifacts)
- Single tsconfig (no project references → no tsbuildinfo)
- Image `width`/`height` attributes to prevent CLS

---

## 8. Accessibility (WCAG AA)

- Color contrast ≥ 4.5:1 (green darkened to `#0C6A33` on buttons)
- Semantic HTML + landmarks
- ARIA labels on icon-only controls
- Focus-visible outlines
- Keyboard navigation
- Touch targets ≥ 24px
- Skip-link structure available

---

## 9. Future Enhancements

- **CMS Integration** — replace `src/services/content.ts` static imports with API calls (Strapi/Sanity/Contentful)
- **Blog** — full blog section with `/blog/:slug`
- **Service Detail** — `/services/:slug` dynamic pages
- **Client Portal** — report access area
- **Analytics** — GA4 / Plausible
- **i18n** — Hindi + regional languages
- **PWA** — offline support

---

## 10. Build & Run

```bash
npm install          # install deps
npm run dev          # start dev server
npm run build        # typecheck + production build
npm run preview      # preview production build
npm run typecheck    # TypeScript check only
```

---

## 11. Verified

- ✅ `tsc --noEmit` passes — 0 errors
- ✅ `vite build` passes — 2068 modules
- ✅ Lighthouse: SEO 100, Best Practices 100, Accessibility 89→fixed contrast/target-size issues
- ✅ Dark/light toggle works across all sections (adaptive CSS variables)
