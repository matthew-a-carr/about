import { expect, test } from '@playwright/test';
import { gotoHome, sections } from './_utils';

test('home page renders without console errors', async ({ page }, testInfo) => {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];
  const notFoundUrls: string[] = [];
  const baseUrl = new URL(
    testInfo.project.use.baseURL ?? 'http://127.0.0.1:3000',
  ).origin;

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  page.on('pageerror', (error) => {
    pageErrors.push(error.message);
  });

  page.on('response', (response) => {
    if (response.status() === 404 && response.url().startsWith(baseUrl)) {
      notFoundUrls.push(response.url());
    }
  });

  await gotoHome(page);

  expect(pageErrors).toEqual([]);
  expect(notFoundUrls).toEqual([]);
  expect(consoleErrors).toEqual([]);
});

test('primary navigation anchors target sections', async ({ page }) => {
  await gotoHome(page);
  const primaryNav = page.getByRole('navigation', { name: 'Primary' });

  for (const section of sections) {
    const link = primaryNav.locator(`a[href="#${section.id}"]`);

    await expect(link).toHaveCount(1);
    await expect(page.locator(`#${section.id}`)).toHaveCount(1);
    await link.click();
    await expect(page).toHaveURL(new RegExp(`#${section.id}$`));
  }
});

test('primary CTAs are visible with external profile links', async ({
  page,
}) => {
  await gotoHome(page);

  const hero = page.locator('#main-content');
  const heroLinkedIn = hero.getByRole('link', { name: 'LinkedIn' });
  const heroGithub = hero.getByRole('link', { name: 'GitHub' });

  await expect(heroLinkedIn).toBeVisible();
  await expect(heroGithub).toBeVisible();
  await expect(heroLinkedIn).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/matthew-carr-17012284',
  );
  await expect(heroGithub).toHaveAttribute(
    'href',
    'https://github.com/matthew-a-carr',
  );
});

test('external links open in a new tab', async ({ page }) => {
  await gotoHome(page);

  await expect(
    page.locator('a[href="https://github.com/matthew-a-carr"]').first(),
  ).toHaveAttribute('target', '_blank');
  await expect(
    page
      .locator('a[href="https://www.linkedin.com/in/matthew-carr-17012284"]')
      .first(),
  ).toHaveAttribute('target', '_blank');
  await expect(
    page.locator('a[href="https://benifex.com"]').first(),
  ).toHaveAttribute('target', '_blank');
});

test('every external link carries rel="noopener noreferrer"', async ({
  page,
}) => {
  await gotoHome(page);

  const externalAnchors = page.locator('a[target="_blank"]');
  const count = await externalAnchors.count();
  expect(count).toBeGreaterThan(0);

  for (let i = 0; i < count; i++) {
    const rel = (await externalAnchors.nth(i).getAttribute('rel')) ?? '';
    expect(rel, `anchor index ${i} missing rel`).toContain('noopener');
    expect(rel, `anchor index ${i} missing rel`).toContain('noreferrer');
  }
});

test('skip-to-content link becomes visible on focus and targets the hero', async ({
  page,
}) => {
  await gotoHome(page);

  const skipLink = page.getByRole('link', { name: 'Skip to content' });
  await expect(skipLink).toHaveAttribute('href', '#main-content');

  await skipLink.focus();
  await expect(skipLink).toBeVisible();
});

test('hash deep-link on initial load scrolls to the target section', async ({
  page,
}) => {
  await gotoHome(page, '/#building');

  // Wait for smooth-scroll to settle: poll until scrollY stays stable.
  await page.waitForFunction(
    () => {
      const w = window as unknown as {
        __lastScroll?: number;
        __stableTicks?: number;
      };
      if (w.__lastScroll === window.scrollY) {
        w.__stableTicks = (w.__stableTicks ?? 0) + 1;
        return (w.__stableTicks ?? 0) >= 3;
      }
      w.__lastScroll = window.scrollY;
      w.__stableTicks = 0;
      return false;
    },
    { polling: 100, timeout: 5000 },
  );

  const viewportTop = await page
    .locator('#building')
    .evaluate((el) => el.getBoundingClientRect().top);

  // The building section should be at or near the top of the viewport.
  expect(viewportTop).toBeGreaterThanOrEqual(0);
  expect(viewportTop).toBeLessThan(200);
});

test('sticky header remains visible after scrolling to the bottom', async ({
  page,
}) => {
  await gotoHome(page);

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(200);

  const header = page.locator('header').first();
  await expect(header).toBeVisible();
});

test('scroll-triggered elements gain the in-view class after scrolling', async ({
  page,
}) => {
  await gotoHome(page);

  await page.locator('#building').scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);

  const inViewCount = await page.locator('[data-animate].in-view').count();
  expect(inViewCount).toBeGreaterThan(0);
});

test('hero avatar and Benifex logo load successfully', async ({ page }) => {
  await gotoHome(page);

  for (const alt of ['Matthew Carr', 'Benifex logo']) {
    const img = page.locator(`img[alt="${alt}"]`).first();
    await img.scrollIntoViewIfNeeded();
    await expect(img).toBeVisible();
    // Next.js lazy-loads images; wait for the natural width to populate.
    await expect
      .poll(
        async () =>
          img.evaluate((node) => (node as HTMLImageElement).naturalWidth),
        { timeout: 5000 },
      )
      .toBeGreaterThan(0);
  }
});

test('every section has at least one heading', async ({ page }) => {
  await gotoHome(page);

  for (const section of sections) {
    const headings = page.locator(
      `#${section.id} h1, #${section.id} h2, #${section.id} h3`,
    );
    expect(
      await headings.count(),
      `section #${section.id} should have a heading`,
    ).toBeGreaterThan(0);
  }
});

test('page title and meta description match the brand', async ({ page }) => {
  await gotoHome(page);

  await expect(page).toHaveTitle('Matthew Carr — Staff Backend Engineer');
  const description = await page
    .locator('meta[name="description"]')
    .getAttribute('content');
  expect(description).toBe(
    'Matthew Carr is a Staff Backend Engineer at Benifex, putting good engineering principles and design into agentic systems to build well-thought-out applications.',
  );
});

test('footer exposes GitHub and LinkedIn links', async ({ page }) => {
  await gotoHome(page);

  const footer = page.locator('footer').last();
  await expect(footer.getByRole('link', { name: 'GitHub' })).toBeVisible();
  await expect(footer.getByRole('link', { name: 'LinkedIn' })).toBeVisible();
});

test('sticky header is opaque enough to obscure content under it', async ({
  page,
}) => {
  await gotoHome(page);
  await page.evaluate(() => window.scrollTo(0, 2000));
  await page.waitForTimeout(200);

  const headerBg = await page
    .locator('header')
    .first()
    .evaluate((el) => getComputedStyle(el).backgroundColor);

  const match = headerBg.match(/rgba?\(([^)]+)\)/);
  expect(match, `unparseable backgroundColor: ${headerBg}`).not.toBeNull();
  const parts = (match?.[1] ?? '')
    .split(',')
    .map((s) => Number.parseFloat(s.trim()));
  const alpha = parts.length === 4 ? parts[3] : 1;

  expect(
    alpha,
    `header alpha was ${alpha} (${headerBg})`,
  ).toBeGreaterThanOrEqual(0.9);
});

test('section anchors leave room for the sticky header', async ({ page }) => {
  await gotoHome(page);

  const headerHeight = await page
    .locator('header')
    .first()
    .evaluate((el) => (el as HTMLElement).getBoundingClientRect().height);

  for (const section of sections.filter((s) => s.id !== 'main-content')) {
    const scrollMargin = await page
      .locator(`#${section.id}`)
      .evaluate((el) =>
        Number.parseFloat(getComputedStyle(el).scrollMarginTop),
      );

    expect(
      scrollMargin,
      `#${section.id} scroll-margin-top (was ${scrollMargin}px, header ${headerHeight}px)`,
    ).toBeGreaterThanOrEqual(headerHeight);
  }
});

test('mobile header keeps the brand on a single line', async ({ page }) => {
  await page.setViewportSize({ width: 393, height: 852 });
  await gotoHome(page);

  const brand = page
    .locator('header span', { hasText: 'Matthew Carr' })
    .first();

  if ((await brand.count()) === 0) {
    // It's also acceptable to hide the brand on mobile.
    return;
  }

  const lines = await brand.evaluate((el) => {
    const range = document.createRange();
    range.selectNodeContents(el);
    return range.getClientRects().length;
  });
  expect(lines, 'brand line count').toBeLessThanOrEqual(1);
});

test('mobile primary nav does not push content beyond the viewport', async ({
  page,
}) => {
  await page.setViewportSize({ width: 393, height: 852 });
  await gotoHome(page);

  const overflow = await page.evaluate(
    () =>
      document.documentElement.scrollWidth -
      document.documentElement.clientWidth,
  );
  expect(
    overflow,
    `document overflows viewport by ${overflow}px`,
  ).toBeLessThanOrEqual(0);

  const nav = page.getByRole('navigation', { name: 'Primary' });
  const overflowX = await nav.evaluate((el) => getComputedStyle(el).overflowX);
  expect(['auto', 'scroll']).toContain(overflowX);
});

test('keyboard navigation reaches every primary nav link', async ({ page }) => {
  await gotoHome(page);

  const primaryNav = page.getByRole('navigation', { name: 'Primary' });
  const navLinks = primaryNav.locator('a');
  const total = await navLinks.count();
  expect(total).toBe(sections.length);

  for (let i = 0; i < total; i++) {
    await navLinks.nth(i).focus();
    await expect(navLinks.nth(i)).toBeFocused();
  }
});
