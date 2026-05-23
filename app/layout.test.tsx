import { renderToStaticMarkup } from 'react-dom/server';
import { afterEach, describe, expect, it, vi } from 'vitest';

vi.mock('@vercel/analytics/next', () => ({
  __esModule: true,
  Analytics: () => '__ANALYTICS_MARKER__',
}));

vi.mock('@vercel/speed-insights/next', () => ({
  __esModule: true,
  SpeedInsights: () => '__SPEED_INSIGHTS_MARKER__',
}));

const originalVercel = process.env.VERCEL;

const loadLayout = async () => {
  vi.resetModules();
  const mod = await import('./layout');
  return mod.default;
};

describe('RootLayout', () => {
  afterEach(() => {
    if (originalVercel === undefined) {
      delete process.env.VERCEL;
    } else {
      process.env.VERCEL = originalVercel;
    }
  });

  it('renders children inside <html lang="en"> when not running on Vercel', async () => {
    delete process.env.VERCEL;
    const RootLayout = await loadLayout();

    const markup = renderToStaticMarkup(
      <RootLayout>
        <span data-testid="child">child</span>
      </RootLayout>,
    );

    expect(markup).toContain('<html lang="en">');
    expect(markup).toContain('<span data-testid="child">child</span>');
    expect(markup).not.toContain('__ANALYTICS_MARKER__');
    expect(markup).not.toContain('__SPEED_INSIGHTS_MARKER__');
  });

  it('mounts Vercel analytics components when VERCEL=1', async () => {
    process.env.VERCEL = '1';
    const RootLayout = await loadLayout();

    const markup = renderToStaticMarkup(
      <RootLayout>
        <span data-testid="child">child</span>
      </RootLayout>,
    );

    expect(markup).toContain('__ANALYTICS_MARKER__');
    expect(markup).toContain('__SPEED_INSIGHTS_MARKER__');
  });
});
