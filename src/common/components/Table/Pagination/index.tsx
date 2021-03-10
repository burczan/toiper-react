/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import cx from 'classnames';
import { PaginationLink } from './PaginationLink';
import { PaginationProps } from '../model';
import s from './style.module.css';

export const Pagination = ({
  currentPage,
  totalPageNumber,
  onPageChange,
}: PaginationProps) => {
  const pages = Array.from({ length: totalPageNumber }, (_, i) => i + 1);
  const isFirstPage = currentPage - 1 === 0;
  const isLastPage = currentPage + 1 > totalPageNumber;

  return (
    <nav className="pagination is-centered" role="navigation" aria-label="pagination">
      <a
        className={cx('pagination-previous', { [s.disabled]: isFirstPage })}
        onClick={isFirstPage ? undefined : () => onPageChange(currentPage - 1)}
      >
        Previuos
      </a>
      <a
        className={cx('pagination-next', { [s.disabled]: isLastPage })}
        onClick={isLastPage ? undefined : () => onPageChange(currentPage + 1)}
      >
        Next
      </a>
      <ul className="pagination-list">
        {pages.map((page) => {
          return (
            <PaginationLink
              key={page}
              page={page}
              isCurrentPage={page === currentPage}
              onPageChange={onPageChange}
            />
          );
        })}
      </ul>
    </nav>
  );
};
