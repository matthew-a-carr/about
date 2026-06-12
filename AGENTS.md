READ ../dev-skills/AGENTS.md BEFORE ANYTHING (skip if missing)

## Notes for agent runs

- **Integration tests without browser downloads**: the Playwright suite
  defaults to Playwright's bundled browsers (~500MB download). On a machine
  without them, run the chromium-family projects against installed Google
  Chrome instead:

  ```bash
  PW_BROWSER_CHANNEL=chrome pnpm exec playwright test --project=chromium --project=mobile-chrome
  ```

  Call `playwright test` directly (not `pnpm test:integration`) to skip the
  `pretest` hook that runs `playwright install`. Firefox/WebKit projects
  still need the bundled browsers — leave those to CI.

- **Animations are progressive enhancement**: page content must stay fully
  visible in server HTML. GSAP (`app/components/effects/GsapEffects.tsx`)
  hides elements only at animation start, driven by data attributes
  (`data-animate`, `data-hero`, `data-split`, `data-statement`,
  `data-lines`, `data-parallax`). If you add a new animated attribute,
  also add it to the axe override in `integration/accessibility.spec.ts`.

- **Section contract**: nav anchors, section ids, and headings are asserted
  in `integration/_utils.ts` (sections list), `app/page.test.tsx`, and
  `integration/page.spec.ts`. Keep all three in sync when adding/renaming
  sections.

- **Verify visually**: after layout changes, screenshot desktop (1440px) and
  mobile (Pixel 7) with Playwright + installed Chrome and check for
  horizontal overflow before pushing.
