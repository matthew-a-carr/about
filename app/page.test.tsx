import { render, screen } from '@testing-library/react';
import Page from './page';

jest.mock('./components/footer/Footer', () => ({
  __esModule: true,
  default: () => null,
}));

jest.mock('./components/technical-skills/TechnicalSkills', () => ({
  __esModule: true,
  default: () => null,
}));

describe('Page', () => {
  it('should render', () => {
    render(<Page />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
