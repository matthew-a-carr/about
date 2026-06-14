# AGENTS.md — About (matthew-a-carr/about)

> Personal portfolio / about-me site. Single Next.js app, no monorepo.

---

## Repo layout

```
about/
├── app/              ← Next.js App Router (pages, components, styles)
├── integration/      ← Playwright integration tests
├── docs/             ← Project docs
│   └── decisions/    ← ADRs (created lazily, none yet)
├── public/           ← Static assets
├── biome.json        ← Lint/format config
├── playwright.config.ts
├── vitest.config.ts
└── package.json
```

---

## Stack

- **Runtime/framework**: Next.js (App Router), React, TypeScript
- **Package manager**: pnpm
- **Lint/format**: Biome
- **Unit tests**: Vitest
- **Integration / e2e**: Playwright (axe accessibility gate in
  `integration/accessibility.spec.ts`)
- **Animation**: GSAP, as progressive enhancement only (content must render
  in server HTML — see "Animations" below)
- **Styling**: Tailwind CSS v4

---

## Verification — run before pushing

```bash
pnpm check                 # Biome: lint + format
pnpm exec tsc --noEmit     # type-check
pnpm test                  # Vitest unit tests
pnpm build                 # production build
```

### Integration tests (Playwright)

The Playwright suite defaults to bundled browsers (~500MB download). On a
machine without them, run chromium-family projects against installed Chrome:

```bash
PW_BROWSER_CHANNEL=chrome pnpm exec playwright test --project=chromium --project=mobile-chrome
```

Call `playwright test` directly (not `pnpm test:integration`) to skip the
`pretest` hook that runs `playwright install`. Firefox/WebKit projects
still need the bundled browsers — leave those to CI.

### What to run based on what you changed

| You changed…            | Run                                                                                                  |
| ----------------------- | ---------------------------------------------------------------------------------------------------- |
| Anything in `app/`      | `pnpm check && pnpm exec tsc --noEmit && pnpm test`                                                 |
| A component / page / UI | the above, plus the integration suite + a desktop/mobile screenshot pass                             |
| Layout or sections      | integration suite (keeps the section contract in `integration/_utils.ts` + `page.test.tsx` in sync)  |

---

## Repo-specific rules

### Animations are progressive enhancement

Page content must stay fully visible in server HTML. GSAP
(`app/components/effects/GsapEffects.tsx`) hides elements only at animation
start, driven by data attributes (`data-animate`, `data-hero`, `data-split`,
`data-statement`, `data-lines`, `data-parallax`). If you add a new animated
attribute, also add it to the axe override in
`integration/accessibility.spec.ts`.

### Section contract

Nav anchors, section ids, and headings are asserted in
`integration/_utils.ts` (sections list), `app/page.test.tsx`, and
`integration/page.spec.ts`. Keep all three in sync when adding/renaming
sections.

### Verify visually

After layout changes, screenshot desktop (1440 px) and mobile (Pixel 7) with
Playwright + installed Chrome and check for horizontal overflow before pushing.

---

## Conventions

- **File names**: `kebab-case.ts` / `kebab-case.tsx`
- **Commits**: Conventional Commits — `feat:`, `fix:`, `docs:`, `chore:`,
  `test:`, `refactor:`, `ci:`
- **Components**: React Server Components by default; `"use client"` only
  when state/effects/browser APIs are needed, pushed to the leaf
- **Styling**: use design tokens (CSS custom properties / Tailwind theme),
  never hard-code raw hex or px values inline

---

## Issue tracker

GitHub issues on `matthew-a-carr/about`. Use the `gh` CLI:

```bash
gh issue create --title "..." --body "..."   # create
gh issue view <number> --comments            # read
gh issue list --state open --json number,title,body,labels,comments  # list
gh issue comment <number> --body "..."       # comment
gh issue edit <number> --add-label "..."     # label
gh issue close <number> --comment "..."      # close
```

Infer the repo from `git remote -v` — `gh` does this automatically inside a
clone.

---

## Workflow labels (aspirational — not yet wired up)

The autonomous lifecycle labels below follow travel-planner's `ai:*`
vocabulary. The routines are not yet active in `about` — these are the labels
to create/apply when they are.

| Lifecycle role        | Label              | Fires / means                                |
| --------------------- | ------------------ | -------------------------------------------- |
| plan a SPEC           | `ai:plan`          | `draft-spec` — issue → SPEC PR               |
| plan an EPIC          | `ai:plan-epic`     | `draft-epic` — issue → EPIC PR               |
| revise from feedback  | `ai:revise-now`    | `revise-spec` — rewrite spec/epic PR         |
| implement             | `ai:implement`     | `implement-spec` — merged spec PR → impl PR  |
| ready for review      | `ai:done`          | implementation PR awaiting human review      |
| blocked               | `ai:blocked`       | a routine hit a wall; needs a human          |
| already planned       | `ai:planned`       | issue already drafted; routine won't redo it |

---

## Domain language

Use the names already used in this file and the codebase. Don't drift to
synonyms. Key concepts:

- **Section contract**: the nav anchors / section ids / headings triple
  asserted in `integration/_utils.ts`, `app/page.test.tsx`, and
  `integration/page.spec.ts`.
- **Progressive enhancement**: animations driven by `data-*` attributes that
  GSAP picks up client-side; content is fully visible in server HTML.

### Architectural decisions

`docs/decisions/NNN-title.md` (created lazily — none exist yet). When a
decision meets the ADR triggers, write a new ADR. Do **not** create a
separate `docs/adr/` directory.

If output contradicts an existing ADR, surface it explicitly rather than
silently overriding it.

---

## Marketplace plugins (best-effort)

Two plugins are pinned in `.claude/settings.json` via the `matthew-a-carr`
marketplace (`matthew-a-carr/ai-plugins`):

- **`engineering-principles@matthew-a-carr`** — engineering constitution,
  `apply-principles` and `architecture-review` skills.
- **`agent-skills@matthew-a-carr`** — TDD loop, debugging, frontend UI
  engineering, security hardening, and interactive planning helpers.

Loading is **best-effort**: a marketplace plugin may need a trust prompt that
a headless session can't answer. This AGENTS.md is fully self-contained —
everything an agent needs to work in this repo is documented above. The
plugins provide enhanced workflows when available but are never required.

---

## Doc review — keeping docs true

| You changed…                          | Check these docs                                                           |
| ------------------------------------- | -------------------------------------------------------------------------- |
| Layout or sections                    | Section contract triple (`integration/_utils.ts`, `page.test.tsx`, `page.spec.ts`) |
| A new animated `data-*` attribute     | axe override in `integration/accessibility.spec.ts`                        |
| Verification commands or CI           | This `AGENTS.md` verification section                                      |
| An ADR (add / rename / status change) | `docs/decisions/README.md` index (when it exists)                          |
