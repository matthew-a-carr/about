import React from 'react';
import Page from './page';
import { render, screen } from '@testing-library/react';

describe('Page', () => {
  it('should render', () => {
    render(<Page />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
