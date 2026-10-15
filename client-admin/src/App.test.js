import { render, screen } from '@testing-library/react';
import App from './App';

test('renders admin login form', () => {
  render(<App />);
  const titleElement = screen.getByText(/admin login/i);
  expect(titleElement).toBeInTheDocument();
});
