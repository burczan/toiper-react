import React from 'react';
import { render, screen } from '@testing-library/react';
import { Icon } from '.';

describe('<Icon />', () => {
  it('renders without crashing', () => {
    const icon = 'error';
    render(<Icon name={icon} />);
    expect(screen.getByTitle(icon)).toHaveClass('material-icons');
  });
});
