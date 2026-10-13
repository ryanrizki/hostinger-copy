# AI Reflection

Facts from [AI_LOG.md](AI_LOG.md).

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
| 7 | Built the clone from DOM text without ever looking at the rendered source page; layout drifted, 2 sections missing | User compared the two sites | Screenshot-first rule, `npm run compare`, COMPARISON.md |
| 6 | Tried to read per-account GitHub tokens to pin push identity | Blocked by the agent's safety layer | Used a pre-push hook that checks the active account, no secrets touched |

## Guardrails that worked

- **Napkin file**: rules the agent re-reads every task; mistakes become new rules.
- **Plan updated in every commit**: the history shows progress, not just code.
- **Tests run against the real runtime** (Wrangler), plus one deliberate mutation to prove they fail when they should.
- **Measure, don't trust**: contrast, fold height, JS size, horizontal scroll were all computed.
- **Account isolation**: GitHub push guarded by hook; Wrangler login isolated per project.

## What I would never let AI do unreviewed

1. **Factual claims in docs.** Numbers (contrast ratios, sizes, prices), "reviewed by", "tested on". The AI estimated contrast ratios and once invented a review history that never happened. Both looked plausible. Rule: a number goes in a doc only if a script or tool produced it.
2. **Accessibility attributes.** `aria-invalid=""` looked correct in code but told screen readers the field was valid. A11y bugs are invisible to sighted review, so they need a check against the spec or the built output.
3. **Anything touching accounts, credentials or deploys.** Which GitHub account pushes, which Cloudflare account deploys. Three GitHub accounts and two Cloudflare accounts were logged in on this machine. I made the guardrails explicit (pre-push hook, project-local Wrangler login) instead of trusting the agent to pick the right one.
4. **Design recommendations.** The design skill returned a crypto-themed font pair and a personalization layout that needs analytics. Useful as options, wrong as answers. I keep the final call on what fits the user and the PRD.
5. **Pushing or publishing.** The agent commits locally; I approve every push.

## What I'd do differently

1. **Set the guardrails before the first prompt.** Account isolation, the napkin rules and "measure, don't estimate" were added after problems appeared. Next time they go in on day zero.
2. **Ask the interviewer the open questions first.** I assumed answers (mock signup, own design system, Indonesian only) and documented them. Sending the 4 questions upfront would remove that risk.
3. **Make the first test fail on purpose.** The mutation check came after the tests were green. Writing one failing test first would prove the setup earlier.
4. **Add a type-check step.** I skipped `typescript` to stay lean, and that's fine at this size. With more TS files, I'd add `astro check` to CI.
5. **Use screenshots of the source page in discovery.** The browser rendered blank below the fold, so I relied on DOM text. A full-page capture tool would have given a better visual reference.
