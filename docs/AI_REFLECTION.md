# AI Reflection

Facts from [AI_LOG.md](AI_LOG.md). Sections marked _your words_ are for the candidate to write: the interview is about how *you* work with AI.

## How AI was used

| Role | Where |
|------|-------|
| Planner | Process checklist, implementation slices |
| Analyst | Page breakdown from DOM text + computed styles |
| Writer | PRD, architecture, ADRs, deploy doc (all reviewed) |
| Designer | `ui-ux-pro-max` skill for palette, type, UX rules |
| Builder | Components, validation, API, tests |
| Reviewer | `ponytail-review` skill for over-engineering, self-review for a11y |
| Tester | Playwright tests + mutation check |

## Where AI was wrong (and how it was caught)

| # | Mistake | Caught by | Fix |
|---|---------|-----------|-----|
| 1 | Design skill suggested an "AI personalization" layout and crypto-mood fonts for a hosting affiliate page | Reading its output against the PRD | Kept palette + UX rules, swapped pattern and fonts |
| 2 | Contrast ratios in the design doc were estimated, off by up to 0.9 | Re-computing with a WCAG formula script | Corrected all values |
| 3 | `aria-invalid` set to `""` (screen readers read it as *valid*) + a Tailwind variant that doesn't exist, so error borders never showed | Self-review of the form, then checking built CSS | Set `"true"`, used arbitrary variant, verified in output |
| 4 | Implementation plan included "AI draft vs human fix" notes about drafts that never existed | Re-reading before commit | Replaced with real decisions; napkin rule added |
| 5 | Mobile hero spilled past the 375×667 fold (PRD US-1) | Measuring with Playwright, not eyeballing | Tightened padding, re-measured |
| 6 | Tried to read per-account GitHub tokens to pin push identity | Blocked by the agent's safety layer | Used a pre-push hook that checks the active account, no secrets touched |

## Guardrails that worked

- **Napkin file**: rules the agent re-reads every task; mistakes become new rules.
- **Plan updated in every commit**: the history shows progress, not just code.
- **Tests run against the real runtime** (Wrangler), plus one deliberate mutation to prove they fail when they should.
- **Measure, don't trust**: contrast, fold height, JS size, horizontal scroll were all computed.
- **Account isolation**: GitHub push guarded by hook; Wrangler login isolated per project.

## What I would never let AI do unreviewed

_your words_. Suggested starting points: claims in docs (numbers, "reviewed by"), accessibility attributes, anything touching credentials or deploy accounts.

## Time

_your words_. Rough estimate of time with AI vs. without.

## What I'd do differently

_your words_.
