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

vi.mock('./components/reveal/RevealOnScroll', () => ({
  __esModule: true,
  default: () => null,
}));

const expectedNavLinks: { label: string; href: string }[] = [
  { label: 'Overview', href: '#main-content' },
  { label: 'About', href: '#about' },
  { label: 'Impact', href: '#impact' },
  { label: 'Skills', href: '#skills' },
  { label: 'Current', href: '#current' },
  { label: 'Contact', href: '#contact' },
];

describe('Page', () => {
  it('renders the hero H1', () => {
    render(<Page />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'I build backend platforms teams trust in production.',
      }),
    ).toBeInTheDocument();
  });

  it('renders the section headings used by the redesigned layout', () => {
    render(<Page />);

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
  });

  it('renders the primary nav with all expected anchors', () => {
    render(<Page />);

    const nav = screen.getByRole('navigation', { name: 'Primary' });
    for (const link of expectedNavLinks) {
      const anchor = nav.querySelector(`a[href="${link.href}"]`);
      expect(anchor, `nav link ${link.label}`).toBeInTheDocument();
      expect(anchor).toHaveTextContent(link.label);
    }
  });

  it('renders the skip-to-content link before nav', () => {
    render(<Page />);

    const skip = screen.getByRole('link', { name: 'Skip to content' });
    expect(skip).toHaveAttribute('href', '#main-content');
  });

  it('renders every section landmark by id', () => {
    const { container } = render(<Page />);

    for (const id of [
      'main-content',
      'about',
      'impact',
      'skills',
      'current',
      'contact',
    ]) {
      expect(container.querySelector(`section#${id}`)).toBeInTheDocument();
    }
  });

  it('renders the four profile snapshot rows', () => {
    render(<Page />);

    for (const label of ['Role', 'Stack', 'Now', 'Focus']) {
      expect(screen.getByText(label)).toBeInTheDocument();
    }
  });

  it('links to Benifex in a new tab from the current-role section', () => {
    const { container } = render(<Page />);

    const benifex = container.querySelector('a[href="https://benifex.com"]');
    expect(benifex).toBeInTheDocument();
    expect(benifex).toHaveAttribute('target', '_blank');
    expect(benifex).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('exposes at least one GitHub call to action', () => {
    render(<Page />);

    expect(
      screen.getAllByRole('link', { name: 'GitHub' }).length,
    ).toBeGreaterThan(0);
  });

  it('does not render an "Email me" link', () => {
    render(<Page />);

    expect(
      screen.queryByRole('link', { name: 'Email me' }),
    ).not.toBeInTheDocument();
  });
});
