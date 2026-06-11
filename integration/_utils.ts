import { expect, type Page } from '@playwright/test';

export const sections = [
  { label: 'Overview', id: 'main-content' },
  { label: 'Building', id: 'building' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Current', id: 'current' },
  { label: 'Contact', id: 'contact' },
] as const;

export const gotoHome = async (page: Page, path = '/') => {
  const response = await page.goto(path);

  expect(response?.ok()).toBeTruthy();
  await expect(page.locator('main')).toBeVisible();
};
