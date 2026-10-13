# Napkin

Project rules and running notes. Read before every task. Add a line when a mistake or correction happens.

## Rules

1. **Commits are simple.** One small change per commit, short message (Conventional Commits, subject ≤50 chars). No `Co-Authored-By` or any AI attribution line. Ever.
2. **Every commit updates the plan.** Tick or edit `docs/PLAN.md` in the same commit as the work.
3. **Ponytail review before commit.** Run the `ponytail-review` skill on code changes; cut what it flags or note why not.
4. **Design system via skill.** Use `ui-ux-pro-max` / `impeccable` (or one found via `find-skills`) to build the design system; record it in `docs/DESIGN_SYSTEM.md`.
5. **Log AI use.** Every meaningful AI step goes in `docs/AI_LOG.md`: prompt, tool, output, accepted/rejected/fixed + why.
6. **No Hostinger assets.** No logo, images, or verbatim copy. Own wording, placeholder assets. Study clone only.
7. **Stack stays small.** Astro + Tailwind + JSON content + one Cloudflare Pages Function. New dependency needs an ADR.

## Notes / corrections

- 2026-10-13: Local gh account `gablooge` has no push access to `ryanrizki/hostinger-copy`. Push needs ryanrizki account or collaborator invite.
