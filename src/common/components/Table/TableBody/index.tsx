/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Row } from '../Row';
import { RowWithoutColumns } from '../Row/WithoutColumns';
import { Cell } from '../Cell';
import { BodyProps } from '../model';

export const TableBody = <Data extends unknown>({
  data,
  columns,
  isLoading,
}: BodyProps<Data>): JSX.Element => {
  if (isLoading) {
    return (
      <tbody>
        <RowWithoutColumns colSpan={columns.length} type="loading" />
      </tbody>
    );
  }

  return (
    <tbody>
      {data.length === 0
        ? <RowWithoutColumns colSpan={columns.length} type="empty" />
        : (
          data.map((row: Data, index) => (
            <Row key={`row-${index}`}>
              {columns.map(({ key }) => (
                <Cell key={`cell-${key}-${index}`}>
                  {row[key]}
                </Cell>
              ))}
            </Row>
          ))
        )}
    </tbody>
  );
};
