import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { gotoHome } from './_utils';

test('home page has no serious or critical accessibility violations', async ({
  page,
}) => {
  await gotoHome(page);

  // Reveal animations start at opacity:0; disable transitions and force
  // the rested state so axe scans what the user actually sees rather than
  // the mid-animation frame.
  await page.addStyleTag({
    content:
      '.reveal { opacity: 1 !important; transform: none !important; transition: none !important; }',
  });
  await page.evaluate(() => {
    for (const el of document.querySelectorAll('.reveal')) {
      el.classList.add('in-view');
    }
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
