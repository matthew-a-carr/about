import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Footer from './Footer';

describe('Footer', () => {
  it('renders GitHub and LinkedIn pills with correct external link attributes', () => {
    render(<Footer />);

    const github = screen.getByRole('link', { name: 'GitHub' });
    const linkedin = screen.getByRole('link', { name: 'LinkedIn' });

    expect(github).toHaveAttribute('href', 'https://github.com/matthew-a-carr');
    expect(linkedin).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/matthew-carr-17012284',
    );

    for (const link of [github, linkedin]) {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    }
  });
});
