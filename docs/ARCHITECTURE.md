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
  J[src/content/id.json] --> P[src/pages/index.astro]
  P --> C1[Hero] & C2[Testimonials] & C3[Steps] & C4[Benefits] & C5[Faq] & C6[SignupForm]
  P --> H[dist/index.html]
```

Content is one JSON file imported by the page and passed down as props. Components hold layout only, no copy. A second locale = `en.json` + one route.

## Component tree

```
index.astro            layout shell: <html lang>, meta, header, main, footer
├─ Hero                h1, value prop, commission badge, CTA → #daftar
├─ Testimonials        scroll-snap row of cards
├─ Steps               4 numbered steps
├─ Benefits            3 items
├─ Faq                 <details> list
├─ SignupForm          form + inline <script> for validation + fetch
└─ (footer inline)     links, disclaimer
```

Components are added only when used more than once or when they hold real logic. Header/footer live inline in the page.

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
  pages/index.astro
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
