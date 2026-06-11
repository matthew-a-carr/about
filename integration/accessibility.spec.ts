import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { gotoHome } from './_utils';

test('home page has no serious or critical accessibility violations', async ({
  page,
}) => {
  await gotoHome(page);

  // GSAP-animated elements start at opacity:0 (or dimmed, for the scrubbed
  // statement words); force the rested state so axe scans what the user
  // actually sees rather than a mid-animation frame. !important beats the
  // inline styles GSAP sets.
  await page.addStyleTag({
    content: [
      '[data-animate], [data-hero], [data-split], [data-split] *,',
      '[data-lines], [data-lines] *, .statement-word {',
      '  opacity: 1 !important;',
      '  visibility: visible !important;',
      '  transform: none !important;',
      '  transition: none !important;',
      '  animation: none !important;',
      '}',
    ].join('\n'),
  });

  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa'])
    .analyze();

  const blocking = results.violations.filter(
    (violation) =>
      violation.impact === 'serious' || violation.impact === 'critical',
  );

  expect(
    blocking,
    blocking
      .map(
        (v) => `${v.id} (${v.impact}): ${v.help} — ${v.nodes.length} node(s)`,
      )
      .join('\n'),
  ).toEqual([]);
});
