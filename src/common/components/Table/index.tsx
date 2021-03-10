import React from 'react';
import cx from 'classnames';
import { TableHeader } from './TableHead';
import { TableBody } from './TableBody';
import { RowsPerPageSelector } from './RowsPerPageSelector';
import { Pagination } from './Pagination';
import { TableProps } from './model';
import { usePagination, useSortableData } from '../../hooks';
import s from './style.module.css';

export const Table = <Data extends unknown>({
  data,
  columns,
  isLoading,
  pagination = false,
}: TableProps<Data>) => {
  const {
    filters,
    setFilters,
    sortedDataset,
  } = useSortableData(data);

  const {
    dataOnCurrentPage,
    currentPage,
    totalPageNumber,
    rowsPerPage,
    rowsPerPageOptions,
    setCurrentPage,
    setRowsPerPage,
  } = usePagination(sortedDataset);

  const onSelectorChange = (count: number) => {
    setCurrentPage(1);
    setRowsPerPage(count);
  };

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      {pagination && (
        <RowsPerPageSelector
          options={rowsPerPageOptions}
          rowsPerPage={rowsPerPage}
          onSelectorChange={onSelectorChange}
        />
      )}
      <table className={cx('table is-striped is-bordered is-hoverable is-fullwidth', s.layout)}>
        <TableHeader
          columns={columns}
          filters={filters}
          onChangeSort={setFilters}
        />
        <TableBody
          data={dataOnCurrentPage || data}
          columns={columns}
          isLoading={isLoading}
        />
      </table>
      {pagination && (
        <Pagination
          currentPage={currentPage}
          totalPageNumber={totalPageNumber}
          onPageChange={onPageChange}
        />
      )}
    </>
  );
};
