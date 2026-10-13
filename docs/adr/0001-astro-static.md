# ADR 0001: Astro, static output

**Status:** accepted · 2026-10-13

## Context
One marketing page. Mostly static text, one form. Needs components (to show structure) and good SEO and performance.

## Options
| Option | For | Against |
|--------|-----|---------|
| Plain HTML/CSS | Zero tooling | No components or content model, so little system design to show |
| Next.js | Popular, SSR | Ships React runtime for a static page; Cloudflare needs an extra adapter |
| **Astro (static)** | Components, zero JS by default, first-class static build, works on Pages as-is | Less familiar to some reviewers |

## Decision
Astro static build (the default output, no adapter). No UI framework integration (no React).

## Consequences
- HTML-first, near-zero JS by default.
- Interactivity = native HTML + one inline script.
- Adding React later is one integration if ever needed.
