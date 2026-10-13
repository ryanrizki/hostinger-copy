# ADR 0004: Cloudflare Pages + Pages Functions

**Status:** accepted · 2026-10-13

## Context
Need free hosting, a global CDN, preview URLs for PRs, and one tiny server endpoint for signup.

## Options
| Option | For | Against |
|--------|-----|---------|
| **Cloudflare Pages + Functions** | Static + `functions/` dir in one deploy; Git integration with preview per branch; free tier | Cloudflare now steers new projects toward Workers static assets |
| Workers + static assets | Cloudflare's newer path, more control | Needs worker entry + routing for the API; more config for one endpoint |
| Vercel / Netlify | Also easy | Brief asked for Cloudflare |

## Decision
Cloudflare Pages. `dist/` served as static assets, `functions/api/signup.ts` becomes `POST /api/signup` automatically.

## Consequences
- No server config file required for the endpoint; `wrangler.jsonc` only pins name, output dir, compat date.
- Migration to Workers static assets later is mechanical if Pages is deprecated.
- Storage (KV/D1) is one binding away when signups need persisting.
