# Plan

Updated with every commit.

## Setup
- [x] Repo, git, remote
- [x] Napkin rules, CLAUDE.md, plan, AI log
- [x] Push access to `ryanrizki/hostinger-copy`

## Discovery
- [x] Page breakdown per section (`docs/DISCOVERY.md`)
- [x] Problem statement
- [x] Assumptions + open questions

## Product
- [x] PRD (`docs/PRD.md`)
- [x] Acceptance criteria per story

## System design
- [x] Architecture doc + Mermaid diagrams (`docs/ARCHITECTURE.md`)
- [x] ADRs (`docs/adr/`): stack, styling, content, hosting, validation
- [x] Design system via skill (`docs/DESIGN_SYSTEM.md`)

## AI workflow
- [x] AI drafts implementation plan from PRD (`docs/IMPLEMENTATION_PLAN.md`), reviewed by Ryan
- [x] Tasks split into small slices
- [x] Ponytail review on each code change

## Build
- [x] Astro + Tailwind scaffold
- [x] Sections: Hero, Testimonials, Steps, Benefits, FAQ, Footer
- [x] Content in `src/content/id.json`
- [x] Signup form + `functions/api/signup.ts`
- [x] Responsive, a11y, SEO meta (no h-scroll 375/1440, hero fold measured)
- [x] Playwright tests (3, run against `wrangler pages dev`)

## Visual parity
- [x] Screenshot-first method + `npm run compare` (`docs/COMPARISON.md`)
- [ ] Decide FAQ: dark band (match) vs accordion (keep)
- [ ] Close gaps 1–11 in COMPARISON.md, re-run compare after each

## Deploy
- [x] Cloudflare Pages deploy (direct upload as ryanxxrizki): https://hostinger-copy.pages.dev
- [x] `docs/DEPLOYMENT.md`

## Wrap-up
- [x] README
- [x] `docs/AI_REFLECTION.md` (edited by Ryan)
- [x] Trade-offs + future work (in README)
