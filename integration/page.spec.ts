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
  await gotoHome(page, '/#impact');

  await page.waitForTimeout(300);

  const { scrollY, impactTop } = await page.evaluate(() => {
    const impact = document.getElementById('impact');
    return {
      scrollY: window.scrollY,
      impactTop: impact
        ? impact.getBoundingClientRect().top + window.scrollY
        : 0,
    };
  });

  expect(scrollY).toBeGreaterThan(impactTop - 200);
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

test('reveal-on-scroll elements gain the in-view class after scrolling', async ({
  page,
}) => {
  await gotoHome(page);

  await page.locator('#impact').scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);

  const inViewCount = await page.locator('.reveal.in-view').count();
  expect(inViewCount).toBeGreaterThan(0);
});

test('hero avatar and Benifex logo load successfully', async ({ page }) => {
  await gotoHome(page);

  for (const alt of ['Matthew Carr', 'Benifex logo']) {
    const img = page.locator(`img[alt="${alt}"]`).first();
    await expect(img).toBeVisible();
    const naturalWidth = await img.evaluate(
      (node) => (node as HTMLImageElement).naturalWidth,
    );
    expect(naturalWidth, `${alt} naturalWidth`).toBeGreaterThan(0);
  }
});

test('every section has a heading at level h2 or h3', async ({ page }) => {
  await gotoHome(page);

  for (const section of sections) {
    const headings = page.locator(`#${section.id} h2, #${section.id} h3`);
    expect(
      await headings.count(),
      `section #${section.id} should have a heading`,
    ).toBeGreaterThan(0);
  }
});

test('page title and meta description match the brand', async ({ page }) => {
  await gotoHome(page);

  await expect(page).toHaveTitle('Matthew Carr');
  const description = await page
    .locator('meta[name="description"]')
    .getAttribute('content');
  expect(description).toBe('About me');
});

test('footer exposes GitHub and LinkedIn links', async ({ page }) => {
  await gotoHome(page);

  const footer = page.locator('footer').last();
  await expect(footer.getByRole('link', { name: 'GitHub' })).toBeVisible();
  await expect(footer.getByRole('link', { name: 'LinkedIn' })).toBeVisible();
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
