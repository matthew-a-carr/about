import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { gotoHome } from './_utils';

test('home page has no serious or critical accessibility violations', async ({
  page,
}) => {
  await gotoHome(page);

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
