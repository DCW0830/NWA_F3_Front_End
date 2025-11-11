import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import App from './App';

test('renders Home Page', () => {
  render(<App />);
  expect(screen.getByText(/home page/i)).toBeInTheDocument();
});
