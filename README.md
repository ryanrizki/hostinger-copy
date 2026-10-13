Take-home assessment: rebuild Hostinger's Indonesian affiliate landing page (`/id/afiliasi`). Layout, spacing, colors and type match the source 1:1 (measured with Playwright); brand, copy, illustrations and partner names are our own, and no Hostinger assets are used. The point is the process: AI use, system design, documentation.

**Live:** https://hostinger-copy.pages.dev

## Stack

Astro (static) · Tailwind CSS v4 · one Cloudflare Pages Function · Playwright. Why each: [docs/adr/](docs/adr/).

## Run

```bash
npm install
npm run dev        # UI only, http://localhost:4321
npm run preview    # full site + /api/signup via Wrangler, http://localhost:8788
npm test           # builds, starts Wrangler, runs Playwright
npm run compare    # full-page screenshots: source vs clone → compare/
```

Requires Node ≥ 22.12.

## Docs (read in this order)

| Doc | What |
|-----|------|
| [DISCOVERY](docs/DISCOVERY.md) | Page breakdown, problem statement, assumptions, open questions |
| [PRD](docs/PRD.md) | Goals, users, stories + acceptance criteria, NFRs, metrics, scope |
| [ARCHITECTURE](docs/ARCHITECTURE.md) | System, data flow, component tree, signup sequence |
| [ADRs](docs/adr/) | 6 decisions with options and trade-offs |
| [DESIGN_SYSTEM](docs/DESIGN_SYSTEM.md) | Tokens, type, components, a11y rules, what the AI skill suggested vs kept |
| [COMPARISON](docs/COMPARISON.md) | Side-by-side gaps between source and clone, from screenshots |
| [IMPLEMENTATION_PLAN](docs/IMPLEMENTATION_PLAN.md) | 9 vertical slices, one commit each |
| [DEPLOYMENT](docs/DEPLOYMENT.md) | Cloudflare Pages: git integration, direct upload, rollback, troubleshooting |
| [AI_LOG](docs/AI_LOG.md) | Every AI step: prompt, output, what was accepted/rejected/fixed |
| [AI_REFLECTION](docs/AI_REFLECTION.md) | Where AI helped, where it was wrong, guardrails |
| [PLAN](docs/PLAN.md) | Live checklist, updated in every commit |

## Working rules

[`.claude/napkin.md`](.claude/napkin.md) holds the rules the AI agent follows in this repo (small commits, plan updated per commit, ponytail review, no brand assets, …) plus corrections learned along the way.

## Structure

```
src/layouts/Base.astro       head/meta, header, footer (shared by 3 pages)
src/pages/index.astro        landing, same section order as the source
src/pages/faq.astro          FAQ (linked from the FAQ band)
src/pages/daftar.astro       signup form (all signup CTAs link here)
src/components/*.astro       one per section
src/content/id.json          all copy (i18n-ready)
src/lib/validate.ts          signup rules, shared by form + API
functions/api/signup.ts      POST /api/signup (mock, validates, stores nothing)
tests/landing.spec.ts        3 Playwright tests
```

## Trade-offs and future work

| Cut for v1 | Why | Add when |
|------------|-----|----------|
| Storing signups | Mock is enough to design + test the flow | Real launch: KV or D1 binding |
| Bot protection | No public traffic yet | Before launch: Turnstile + rate limit |
| English locale | Audience is Indonesian | Copy `id.json` → `en.json`, add `/en` route |
| Analytics events | No live traffic to measure | Cloudflare Web Analytics, then CTA click events |
| Pixel-perfect match | Graded on process; own design system instead | – |
| Type-check in CI | Avoided adding `typescript` + `@astrojs/check` for 1 TS file + 1 function | Codebase grows past a few TS files |
