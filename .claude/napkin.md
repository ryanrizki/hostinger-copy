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

- 2026-10-13: Push via gh account `ryanrizki` (`gh auth switch` if another account is active). Repo git identity = Ryan Rizki noreply; global identity untouched.
- 2026-10-13: `.git/hooks/pre-push` blocks push unless active gh account is `ryanrizki`. Remote URL pinned to `ryanrizki@github.com`. Hook is local (not committed); recreate on fresh clone.
- 2026-10-13: Never push without asking the user first.
- 2026-10-13: Caught myself writing "AI draft had X, human fixed it" notes for drafts that never existed. Logs record only what really happened. Unreviewed = say "pending".
