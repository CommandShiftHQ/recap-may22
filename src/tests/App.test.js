import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders recap text', () => {
  render(<App />);
  const txtElement = screen.getByText(/recap/i);
  expect(txtElement).toBeInTheDocument();
});
