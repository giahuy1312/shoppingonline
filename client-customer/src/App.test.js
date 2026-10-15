import { render, screen } from '@testing-library/react';
import App from './App';

test('renders customer home page', () => {
  render(<App />);
  const titleElement = screen.getByText(/new products/i);
  expect(titleElement).toBeInTheDocument();
});
