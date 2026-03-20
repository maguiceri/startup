import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('renders startup navbar', () => {
  const { getByText } = render(<Router><App /></Router>);
  const heading = getByText(/Startup argentina/i);
  expect(heading).toBeInTheDocument();
});
