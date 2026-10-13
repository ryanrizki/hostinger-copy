# Implementation Plan

Drafted by AI from [PRD.md](PRD.md) + [ARCHITECTURE.md](ARCHITECTURE.md), then reviewed. Each slice = one commit, ponytail-reviewed, plan ticked.

| # | Slice | Done when | PRD |
|---|-------|-----------|-----|
| 1 | Scaffold Astro + Tailwind v4, tokens in `@theme`, empty page builds | `npm run build` outputs `dist/index.html` | – |
| 2 | Content JSON + page shell (head meta, skip link, header, footer) | Title/meta/OG from JSON, `lang="id"` | NFR SEO |
| 3 | Hero + Steps + Benefits | Sections render from JSON | US-1, US-3, US-4 |
| 4 | Testimonials + FAQ | Scroll-snap row, `<details>` list | US-2, US-5 |
| 5 | `validate.ts` + Pages Function | Same rules both sides; 400 with field errors | US-6, ADR 0005 |
| 6 | Signup form UI + script | Blur/submit validation, aria wiring, success/error/retry states | US-6 |
| 7 | Playwright tests | 3 tests green against `wrangler pages dev` | AC check |
| 8 | Cloudflare config + DEPLOYMENT.md | `wrangler.jsonc`, documented deploy | ADR 0004 |
| 9 | README + reflection | Links to all docs | – |

## Decisions while slicing

- Header and footer stay inline in the page: each is used once, so no component (ponytail rule: no single-use abstractions).
- Tests run against `wrangler pages dev dist`, not `astro preview`, because only Wrangler serves `functions/` and the signup API must be tested for real.
- Testimonials use CSS scroll-snap, no carousel library (PRD US-2).

Human review of this plan: _pending, add your edits here._
