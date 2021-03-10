import React from 'react';
import cx from 'classnames';
import { CellProps } from '../model';
import s from './style.module.css';

export const Cell = ({
  children,
  colSpan,
  className,
}: CellProps) => {
  return (
    <td colSpan={colSpan} className={cx(className, s.wrapWords)}>
      {children}
    </td>
  );
};
