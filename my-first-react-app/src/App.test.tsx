import React from 'react';
import { render, screen } from '@testing-library/react';
// import App from './App';
import MyComponet from './App';

test('renders learn react link', () => {
  render(<MyComponet name='Alice'/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
