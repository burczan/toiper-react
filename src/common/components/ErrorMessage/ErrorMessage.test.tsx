import React from 'react';
import { render, screen } from '@testing-library/react';
import { ErrorMessage } from '.';

const message = 'Network error';

describe('<ErrorMessage />', () => {
  it('renders without crashing', () => {
    render(<ErrorMessage>{message}</ErrorMessage>);
    expect(screen.getByText(message)).toBeInTheDocument();
  });
});
