# Implementation Plan — Homepage UX Redesign

## task_boundary (simulated)
- Mode: EXECUTION

## Before / After Concepts
- Before: Hero + cards in similar visual rhythm; no explicit page navigation; limited action hierarchy; snapshot separated from hero; low emphasis on operating model.
- After: High-contrast hero with explicit action hierarchy, anchored nav, integrated snapshot, outcome highlights, and a clear operating model timeline to scaffold trust.

## Specific File Changes
- `app/page.tsx`
  - New anchored nav + skip link, stronger hero copy, integrated snapshot, outcome highlights, and operating model section.
  - Example:

```tsx
<nav aria-label="Primary" className="...">
  {navLinks.map((link) => (
    <a key={link.href} href={link.href} className="...">
      {link.label}
    </a>
  ))}
</nav>
```

- `app/globals.css`
  - Added background grid texture + staged hero reveal and floating accent shapes.

```css
.bg-grid {
  background-image: radial-gradient(...), radial-gradient(...);
  background-size: 26px 26px, 60px 60px;
}

.fade-up {
  opacity: 0;
  transform: translateY(18px);
  animation: fadeUp 0.8s ease forwards;
}
```

- `app/components/theme-toggle/ThemeToggle.tsx`
  - Focus-visible outline for keyboard users; labelled grouping.

- `app/components/footer/Footer.tsx`
  - Focus-visible outline for keyboard users.

## Styling Updates (Tokens)
- Preserved palette; added depth via `bg-grid`, `fade-up`, `float-slow`.
- Elevated contrast hierarchy using existing tokens: `--fg`, `--accent`, `--on-dark`.
- Added `prefers-reduced-motion` guardrails for hero animation layers.

## Accessibility Checklist
- Skip link to main content.
- Keyboard focus states on all interactive controls.
- Semantic landmarks: `header`, `nav`, `section`, `footer`.
- Color contrast: verify accent-on-surface and muted text on background meets WCAG 2.1 AA.
- Touch targets: buttons sized ≥ 44px height (verify on mobile).
- External links: `rel="noopener noreferrer"` preserved.
- Motion: reduced motion support via `prefers-reduced-motion`.
