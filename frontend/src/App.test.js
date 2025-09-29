import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Haven - Система управления жильцами/i);
  expect(linkElement).toBeInTheDocument();
});