import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name', () => {
  render(<App />);
  const linkElement = screen.getByText('/Kenny Sichien/i');
  expect(linkElement).toBeInTheDocument();
});
