# Domain Docs

How the engineering skills should consume this repo's domain documentation.

**Layout: single-context.** One `CONTEXT.md` + `docs/adr/` at the repo root
(neither exists yet — they are created lazily when terms or decisions actually
get resolved, e.g. via `grill-with-docs`). Until then, proceed silently; don't
flag their absence.

## Before exploring, read these (if present)

- **`CONTEXT.md`** at the repo root — the project's domain glossary.
- **`docs/adr/`** — ADRs that touch the area you're about to work in.

## Use the glossary's vocabulary

When output names a domain concept (issue title, refactor proposal, test name),
use the term as defined in `CONTEXT.md`. Don't drift to synonyms.

## Flag ADR conflicts

If output contradicts an existing ADR, surface it explicitly rather than
silently overriding.
