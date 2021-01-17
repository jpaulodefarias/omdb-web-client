import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MovieDb brand', () => {
  render(<App />);
  const linkElement = screen.getByText(/MovieDb/i);
  expect(linkElement).toBeInTheDocument();
});
