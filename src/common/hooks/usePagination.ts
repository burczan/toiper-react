/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { PaginationConfig } from '../components/Table/model';

const rowsPerPageOptions = [10, 30, 50];

export const usePagination = <Data>(data: Data[]): PaginationConfig<Data> => {
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPageNumber, setTotalPageNumber] = useState(0);
  const [dataOnCurrentPage, setDataOnCurrentPage] = useState<Data[]>([]);

  const onPageChange = () => {
    const pageRangeStart = (currentPage - 1) * rowsPerPage;
    const pageRangeEnd = currentPage * rowsPerPage;
    setDataOnCurrentPage(data.slice(pageRangeStart, pageRangeEnd));
  };

  const onRowsPerPageChange = () => {
    setTotalPageNumber(Math.ceil(data.length / rowsPerPage));
  };

  useEffect(() => onRowsPerPageChange(), [data, rowsPerPage]);
  useEffect(() => onPageChange(), [data, rowsPerPage, currentPage]);

  return {
    dataOnCurrentPage,
    currentPage,
    totalPageNumber,
    rowsPerPage,
    rowsPerPageOptions,
    setCurrentPage,
    setRowsPerPage,
  };
};
