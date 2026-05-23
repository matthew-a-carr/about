import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import TechnicalSkills from './TechnicalSkills';

const expectedSkills = [
  'Java',
  'Spring Boot',
  'Kotlin',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Snowflake',
  'Terraform',
  'Docker',
  'JavaScript',
  'TypeScript',
  'Cypress',
  'Angular',
  'React',
  'NextJS',
  'AWS',
  'Azure',
  'GCP',
];

describe('TechnicalSkills', () => {
  it('renders every skill chip', () => {
    render(<TechnicalSkills />);

    for (const name of expectedSkills) {
      expect(screen.getByText(name)).toBeInTheDocument();
    }
  });

  it('renders each skill exactly once', () => {
    render(<TechnicalSkills />);

    for (const name of expectedSkills) {
      expect(screen.getAllByText(name)).toHaveLength(1);
    }
  });
});
