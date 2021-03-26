import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TableHead } from '.';
import { Filters } from '../model';
import { columns, Data } from '../test-data';

describe('<TableHead />', () => {
  it('calls onChangeSort when sortable column is clicked', () => {
    const filters: Filters<Data> = { order: undefined, orderBy: undefined };
    const onChangeSort = jest.fn((updatedFilters) => {
      expect(updatedFilters).toEqual({ order: 'desc', orderBy: 'name' });
    });
    render(
      <table>
        <TableHead
          columns={columns}
          filters={filters}
          onChangeSort={onChangeSort}
        />
      </table>,
    );
    userEvent.click(screen.getByText('Name'));
    expect(onChangeSort).toHaveBeenCalledTimes(1);
  });

  it('changes order direction when sortable column is clicked', () => {
    const filters: Filters<Data> = { order: 'asc', orderBy: 'name' };
    const onChangeSort = jest.fn((updatedFilters) => {
      expect(updatedFilters).toEqual({ order: 'desc', orderBy: 'name' });
    });
    render(
      <table>
        <TableHead
          columns={columns}
          filters={filters}
          onChangeSort={onChangeSort}
        />
      </table>,
    );
    userEvent.click(screen.getByText('Name'));
    expect(onChangeSort).toHaveBeenCalledTimes(1);
  });
});
