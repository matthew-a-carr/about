import { expect, type Page, test } from '@playwright/test';

const sections = [
  { label: 'Overview', id: 'main-content' },
  { label: 'About', id: 'about' },
  { label: 'Focus', id: 'focus' },
  { label: 'Skills', id: 'skills' },
  { label: 'Current', id: 'current' },
  { label: 'Contact', id: 'contact' },
];

const gotoHome = async (page: Page) => {
  const response = await page.goto('/');

  expect(response?.ok()).toBeTruthy();
  await expect(page.locator('main')).toBeVisible();
};

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

test('primary CTAs are visible with mailto links', async ({ page }) => {
  await gotoHome(page);

  const heroEmail = page.getByRole('link', { name: 'Say hello' });
  const contactEmail = page.getByRole('link', { name: 'Email me' });

  await expect(heroEmail).toBeVisible();
  await expect(contactEmail).toBeVisible();
  await expect(heroEmail).toHaveAttribute(
    'href',
    'mailto:carr.matty@gmail.com',
  );
  await expect(contactEmail).toHaveAttribute(
    'href',
    'mailto:carr.matty@gmail.com',
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
    page.locator('a[href="https://benifex.com/"]').first(),
  ).toHaveAttribute('target', '_blank');
});
