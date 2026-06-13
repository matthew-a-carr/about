# Stack & Verification

The single source of truth for this repo's toolchain and the commands the
universal engineering skills (`tdd`, `debugging-and-error-recovery`,
`security-and-hardening`, `code-review`, `implement-spec`, …) should run.
Skills source commands from here rather than hard-coding any ecosystem's
tooling — the same skill works against a Go/Rust/Java repo by reading that
repo's copy of this file.

## Stack

- **Runtime/framework**: Next.js (App Router), React, TypeScript
- **Package manager**: pnpm
- **Lint/format**: Biome
- **Unit tests**: Vitest
- **Integration / e2e**: Playwright (axe accessibility gate in
  `integration/accessibility.spec.ts`)
- **Animation**: GSAP, as progressive enhancement only (content must render in
  server HTML — see root `AGENTS.md`)

## Verification — run before pushing

| You changed…            | Run                                                                                                  |
| ----------------------- | ---------------------------------------------------------------------------------------------------- |
| Anything in `app/`      | `pnpm check && pnpm exec tsc --noEmit && pnpm test`                                                   |
| A component / page / UI | the above, plus the integration suite below + a desktop/mobile screenshot pass                       |
| Layout or sections      | integration suite (keeps the section contract in `integration/_utils.ts` + `page.test.tsx` in sync)  |

```bash
pnpm check                 # Biome: lint + format
pnpm exec tsc --noEmit     # type-check (no standalone script; next build also type-checks)
pnpm test                  # Vitest unit tests
pnpm build                 # production build

# Integration (no ~500MB browser download — use installed Chrome):
PW_BROWSER_CHANNEL=chrome pnpm exec playwright test --project=chromium --project=mobile-chrome
```

Firefox/WebKit Playwright projects need the bundled browsers — leave those to CI.
