# Domain Docs

How the engineering skills should learn this repo's domain language and read its
architectural decisions.

## Domain language lives in

The root [`AGENTS.md`](../../AGENTS.md) — specifically the section contract (nav
anchors, section ids, headings, asserted in `integration/_utils.ts`,
`app/page.test.tsx`, `integration/page.spec.ts`) and the animation/progressive-
enhancement rules. There is no `CONTEXT.md` glossary; don't assume or create one.

When output names a concept (section, component, animation attribute), use the
names already used in `AGENTS.md` and the codebase. Don't drift to synonyms.

## Architectural decisions live in

`docs/decisions/NNN-title.md` (created lazily — none exist yet). Write new ADRs
with the `write-adr` skill (CONSTITUTION §7 template) when a decision meets the
ADR triggers; it also maintains the `docs/decisions/README.md` index. Do **not**
create a separate `docs/adr/` directory.

If output contradicts an existing ADR, surface it explicitly rather than
silently overriding it.

## Layout

Single-context: one Next.js app, decisions at the repo root.
