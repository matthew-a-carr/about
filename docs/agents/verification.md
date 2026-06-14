# Stack & Verification

The injection point the universal engineering skills (`tdd`,
`debugging-and-error-recovery`, `security-and-hardening`, `code-review`, …)
read to learn this repo's toolchain and commands, so the same language-agnostic
skill works here as it does in any other repo.

## Stack

- **Runtime/framework**: Next.js (App Router), React, TypeScript
- **Package manager**: pnpm
- **Lint/format**: Biome
- **Unit tests**: Vitest
- **Integration / e2e**: Playwright (axe accessibility gate in
  `integration/accessibility.spec.ts`)
- **Animation**: GSAP (progressive enhancement only)
- **Styling**: Tailwind CSS v4

## Verification

**`AGENTS.md` is canonical.** Do not duplicate the command list here — it drifts.
Run the commands from the two tables in the root [`AGENTS.md`](../../AGENTS.md):

- **"Verification — run before pushing"** — the four gates (`pnpm check`,
  `pnpm exec tsc --noEmit`, `pnpm test`, `pnpm build`).
- **"What to run based on what you changed"** — the scoped subset to run for a
  given change.

CI (`.github/workflows/on-push.yml`) is the hard gate; run the relevant subset
locally first to avoid round-trips.
