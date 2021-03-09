import React from 'react';
import { render, screen } from '@testing-library/react';
import { TableBody } from '.';
import { columns, data } from '../test-data';

describe('<TableBody />', () => {
  it('renders loading spinner while loading state', () => {
    const loading = true;
    render(
      <table>
        <TableBody
          data={data}
          columns={columns}
          isLoading={loading}
        />
      </table>,
    );
    expect(screen.getByText('spinner.svg')).toBeInTheDocument();
  });
});
