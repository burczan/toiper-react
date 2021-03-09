/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import cx from 'classnames';
import { RowsPerPageSelectorProps } from '../model';
import s from './style.module.css';

export const RowsPerPageSelector: React.FC<RowsPerPageSelectorProps> = ({
  options,
  rowsPerPage,
  onSelectorChange,
}) => (
  <div className={s.selector}>
    <span className={cx(s.align)}>Rows per page:</span>
    {options.map((option) => {
      return (
        <a
          key={option}
          className={cx('pagination-link', { 'is-current': option === rowsPerPage })}
          aria-label={`Select ${option} rows per page`}
          onClick={() => onSelectorChange(option)}
        >
          {option}
        </a>
      );
    })}
  </div>
);
