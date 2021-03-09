import React from 'react';
import { render, screen } from '@testing-library/react';
import { LoadingSpinner } from '.';

describe('<LoadingSpinner />', () => {
  it('renders without crashing', () => {
    render(<LoadingSpinner />);
    expect(screen.getByText('spinner.svg')).toBeInTheDocument();
  });
});
