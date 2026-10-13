# Architecture

Static landing page + one serverless endpoint. Decisions in [adr/](adr/).

## System

```mermaid
flowchart LR
  U[Visitor browser] -->|GET /| CDN[Cloudflare edge<br/>static HTML/CSS]
  U -->|POST /api/signup| F[Pages Function<br/>functions/api/signup.ts]
  F -->|validate| F
  F -.->|later: store| KV[(KV / D1)]
  GH[GitHub main] -->|push| CI[Cloudflare Pages build<br/>npm run build]
  CI -->|dist/ + functions/| CDN
```

- Page is pre-rendered at build time (Astro default static output). No server rendering.
- Only dynamic part: `POST /api/signup`, a Cloudflare Pages Function.

## Build-time data flow

```mermaid
flowchart LR
  J[src/content/id.json] --> B[layouts/Base.astro<br/>head, Header, Footer]
  J --> I[pages/index.astro] & F[pages/faq.astro] & D[pages/daftar.astro]
  B --> I & F & D
  I --> H[dist/index.html] 
  F --> H2[dist/faq.html]
  D --> H3[dist/daftar.html]
```

Content is one JSON file passed down as props. Components hold layout only, no copy. A second locale = `en.json` + routes. Pages build as flat files (`faq.html`) so Cloudflare serves `/faq` without a redirect.

## Pages and component tree

```
layouts/Base.astro       <html lang>, meta, skip link, Header, Footer   (used by 3 pages)
├─ Header                nav: logo, 5 menus (<details> dropdowns), language, account; mobile hamburger
└─ Footer                breadcrumb, 6 columns (<details> on mobile), socials, payments, legal

pages/index.astro        landing, same section order as source
├─ Hero                  H1, line, CTA → /daftar
├─ Testimonials          3 cards; mobile scroll-snap + dot pager (tiny IntersectionObserver)
├─ Steps                 4 centered steps + CTA → /daftar
├─ Benefits              2 columns: list + SVG illustration
├─ Band (FAQ)            dark band, button → /faq
├─ Media                 outline button + video slot
├─ Terms                 2 columns: SVG illustration + text + button
└─ Band (final CTA)      dark band, button → /daftar

pages/faq.astro          Faq: <details> list
pages/daftar.astro       SignupForm: form + inline script (validation, fetch)
```

Section components exist because each is a content boundary (one JSON key in, markup out). Band is reused twice; Logo in header and footer.

## Signup flow

```mermaid
sequenceDiagram
  participant B as Browser
  participant F as /api/signup
  B->>B: native + JS validation
  alt invalid
    B-->>B: show inline errors, focus first
  else valid
    B->>F: POST JSON {name, email, website, agree}
    F->>F: validate (same rules)
    alt bad input
      F-->>B: 400 {errors: {field: msg}}
    else ok
      F-->>B: 200 {ok: true}
    end
    B-->>B: show success / errors / retry
  end
```

Validation rules live in one place, `src/lib/validate.ts`, imported by both the form script and the Function, so client and server can't drift.

## Directory layout

```
src/
  layouts/Base.astro
  pages/index.astro, faq.astro, daftar.astro
  components/*.astro
  content/id.json
  lib/validate.ts
  styles/global.css      Tailwind + design tokens
functions/api/signup.ts
tests/landing.spec.ts
docs/
```

## Non-functional choices

| Concern | How |
|---------|-----|
| Perf | Zero framework JS; one small inline script for the form; system font fallback; no images except SVG |
| A11y | Semantic landmarks, native `<details>`, labelled inputs, `aria-live` status, visible focus, `prefers-reduced-motion` |
| SEO | Static HTML, meta + OG from JSON |
| Security | Server-side validation, length caps, JSON-only body, no secrets |
