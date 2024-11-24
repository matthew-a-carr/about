import { render, screen } from '@testing-library/react';
import Page from './page';

describe('Page', () => {
  it('should render', () => {
    render(<Page />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
