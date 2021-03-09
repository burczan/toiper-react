import React from 'react';
import { render, screen } from '@testing-library/react';
import { Cell } from '.';

describe('<Cell />', () => {
  it('renders without crashing', () => {
    render(
      <table>
        <tbody>
          <tr>
            <Cell>
              Cell content
            </Cell>
          </tr>
        </tbody>
      </table>,
    );
    expect(screen.getByText(/cell content/i)).toBeInTheDocument();
  });
});
