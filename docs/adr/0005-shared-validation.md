# ADR 0005: One validation module for client and server

**Status:** accepted · 2026-10-13

## Context
The signup form validates in the browser for UX, and the API must validate again for safety. Two copies of the rules drift.

## Decision
`src/lib/validate.ts` exports `validateSignup(input) → { field: message }`. The form script and `functions/api/signup.ts` both import it. No validation library.

## Alternatives
- Zod/Valibot: nice, but a dependency for four fields.
- HTML attributes only: not enough server-side.

## Consequences
- Same messages client and server.
- Unit-testable in isolation.
