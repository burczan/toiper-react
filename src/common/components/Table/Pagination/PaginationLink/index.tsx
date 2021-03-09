/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import cx from 'classnames';

type PaginationLinkProps = {
  page: number;
  isCurrentPage: boolean;
  onPageChange: (page: number) => void;
};

export const PaginationLink: React.FC<PaginationLinkProps> = ({
  page,
  isCurrentPage,
  onPageChange,
}) => {
  return (
    <li>
      <a
        className={cx('pagination-link', { 'is-current': isCurrentPage })}
        aria-label={`Go to page ${page}`}
        onClick={() => onPageChange(page)}
      >
        {page}
      </a>
    </li>
  );
};
