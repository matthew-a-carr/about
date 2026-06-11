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

vi.mock('./components/effects/GsapEffects', () => ({
  __esModule: true,
  default: () => null,
}));

vi.mock('./components/hero-canvas/HeroCanvas', () => ({
  __esModule: true,
  default: () => null,
}));

const expectedNavLinks: { label: string; href: string }[] = [
  { label: 'Overview', href: '#main-content' },
  { label: 'Building', href: '#building' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Current', href: '#current' },
  { label: 'Contact', href: '#contact' },
];

const expectedProjectLinks = [
  'https://github.com/matthew-a-carr/travel-planner',
  'https://github.com/matthew-a-carr/engineering-principles',
  'https://github.com/matthew-a-carr/dev-skills',
  'https://github.com/matthew-a-carr/about',
];

describe('Page', () => {
  it('renders the hero H1 with the brand name', () => {
    render(<Page />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Matthew Carr',
      }),
    ).toBeInTheDocument();
  });

  it('states the Staff Backend Engineer role in the hero and current section', () => {
    render(<Page />);

    expect(
      screen.getByText('Staff Backend Engineer — Benifex'),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Staff Backend Engineer at Benifex',
      }),
    ).toBeInTheDocument();
  });

  it('renders the section headings used by the redesigned layout', () => {
    render(<Page />);

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: "What I'm building",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Technical skills',
      }),
    ).toBeInTheDocument();
  });

  it('links every project card to its GitHub repository in a new tab', () => {
    const { container } = render(<Page />);

    for (const href of expectedProjectLinks) {
      const anchor = container.querySelector(`a[href="${href}"]`);
      expect(anchor, `project link ${href}`).toBeInTheDocument();
      expect(anchor).toHaveAttribute('target', '_blank');
      expect(anchor).toHaveAttribute('rel', 'noopener noreferrer');
    }
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
      'building',
      'about',
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
