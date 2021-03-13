import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TableHead } from '.';
import { Filters } from '../model';
import { columns, Data } from '../test-data';

describe('<TableHead />', () => {
  it('renders sort icon in head cell when column is sortable', () => {
    const onChangeSort = jest.fn();
    const filters: Filters<Data> = { order: undefined, orderBy: undefined };
    render(
      <table>
        <TableHead
          columns={columns}
          filters={filters}
          onChangeSort={onChangeSort}
        />
      </table>,
    );
    expect(screen.queryAllByRole('columnheader', { name: /sort/i })).toHaveLength(2);
  });

  it('renders upward arrow icon according to asc order direction', () => {
    const onChangeSort = jest.fn(() => {});
    const filters: Filters<Data> = { order: 'asc', orderBy: 'name' };
    render(
      <table>
        <TableHead
          columns={columns}
          filters={filters}
          onChangeSort={onChangeSort}
        />
      </table>,
    );
    expect(within(screen.getByText('Name')).getByText('arrow_upward')).toBeTruthy();
  });

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
