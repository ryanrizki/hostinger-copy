# AI Log

| # | Step | Tool | Prompt (summary) | Output | Decision + why |
|---|------|------|------------------|--------|----------------|
| 1 | Process plan | Claude Code | "Interview take-home: clone Hostinger affiliate page, graded on AI use / system design / docs. List what to do." | Checklist: discovery → PRD → design → AI workflow → build → deploy → reflection | Accepted. Asked to drop day-based schedule; kept flat checklist. |
| 2 | Stack choice | Claude Code | "Easiest stack, not complex" | Astro + Tailwind + JSON content + Cloudflare Pages Function | Accepted. Rejected Next.js (overkill for one static page), plain HTML (no components to show design). |
| 3 | Repo setup | Claude Code | "Create project, napkin rules, commit rules" | Folder, git, napkin, plan, this log | Accepted. Found push-permission gap on remote. |
| 4 | Push guard | Claude Code | "Push only as ryanrizki" | First tried reading gh tokens per user to pin creds; blocked by safety classifier. Switched to pre-push hook checking active gh login. | Accepted hook: no secrets touched, fails loudly. |
| 5 | Discovery | Claude Code + WebFetch + browser pane | "Break down the page: sections, layout, CTAs, tokens" | Section table, computed styles (DM Sans, navy hero, violet CTA), copy summary | Accepted structure. Rewrote all copy in own words, swapped brand to fictional "AwanHost". Screenshots below fold came back blank (lazy render) so relied on DOM text + computed styles. |
| 6 | PRD | Claude Code | "Write lean PRD from discovery: goals, non-goals, stories + AC, NFRs, metrics, scope, risks" | 1-page PRD, 6 stories | Accepted. Changed signup from external redirect to on-page form + mock API so there is a real flow to spec and test. Picked native `<details>`/scroll-snap over JS widgets to keep JS < 50 KB. |
