import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Page from './page';

vi.mock('./components/footer/Footer', () => ({
  __esModule: true,
  default: () => null,
}));

vi.mock('./components/technical-skills/TechnicalSkills', () => ({
  __esModule: true,
  default: () => null,
}));

describe('Page', () => {
  it('should render key content and calls to action', () => {
    render(<Page />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'I build backend platforms teams trust in production.',
      }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole('link', {
        name: 'GitHub',
      }).length,
    ).toBeGreaterThan(0);
    expect(
      screen.getByRole('heading', {
        level: 3,
        name: 'Technical skills',
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 3,
        name: 'What teams get when we work together',
      }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('link', {
        name: 'Email me',
      }),
    ).not.toBeInTheDocument();
  });
});
