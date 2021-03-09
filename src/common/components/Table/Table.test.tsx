import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { Table } from '.';
import { columns, data, Data } from './test-data';

describe('<Table />', () => {
  it('renders without crashing', () => {
    const loading = false;
    render(
      <Table
        data={data}
        columns={columns}
        isLoading={loading}
      />,
    );
    columns.forEach((column) => {
      expect(screen.getByText(column.label)).toBeInTheDocument();
    });

    data.forEach((row) => {
      columns.forEach((column) => {
        expect(screen.getAllByText(row[column.key]).length).toBeGreaterThan(0);
      });
    });
  });

  it('renders with empty data', () => {
    const emptyData: Data[] = [];
    const loading = false;
    render(
      <Table
        data={emptyData}
        columns={columns}
        isLoading={loading}
      />,
    );
    expect(screen.getByText('No results to display.')).toBeInTheDocument();
  });

  it('renders with pagination section', () => {
    const loading = false;
    render(
      <Table
        data={data}
        columns={columns}
        isLoading={loading}
        pagination
      />,
    );
    expect(screen.getByText(/rows per page:/i)).toBeInTheDocument();
    const paginationList = screen.getByRole('listitem');
    within(paginationList).getByText(/1/i);
  });
});
