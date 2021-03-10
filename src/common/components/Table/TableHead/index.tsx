import React from 'react';
import cx from 'classnames';
import { HeaderProps } from '../model';
import { Icon } from '../../Icon';
import s from './style.module.css';

export const TableHeader = <Data extends unknown>({
  columns,
  filters: { order, orderBy },
  onChangeSort,
}: HeaderProps<Data>) => {
  const totalColumnsWidth = columns.reduce((acc, { width }) => acc + (width || 0), 0);
  if (totalColumnsWidth > 100) {
    throw new RangeError(
      `Sum of columns width cannot be greater than 100. Currently it is ${totalColumnsWidth}.`,
    );
  }

  return (
    <thead>
      <tr>
        {columns.map(({
          label, key, sortable, width,
        }) => {
          let state = 'sort';
          if (sortable && orderBy === key) {
            state = order === 'desc' ? 'arrow_downward' : 'arrow_upward';
          }
          return (
            <th
              key={`${key}`}
              onClick={() => sortable && onChangeSort({
                orderBy: key,
                order: order === 'desc' ? 'asc' : 'desc',
              })}
              className={cx({ [s.pointer]: sortable })}
              style={{ width: `${width}%` }}
            >
              {label}
              {sortable && <Icon name={state} />}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
