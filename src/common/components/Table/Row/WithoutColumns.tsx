import React from 'react';
import { Row } from '.';
import { Cell } from '../Cell';
import { LoadingSpinner } from '../../LoadingSpinner';

type RowType = 'loading' | 'empty';

type RowWithoutColumnsProps = {
  colSpan: number;
  type: RowType;
};

type Props = {
  rowKey: string;
  cellKey: string;
  children: React.ReactNode;
};

const options: { [Key in RowType]: Props } = {
  empty: {
    rowKey: 'row-no-data',
    cellKey: 'cell-empty',
    children: 'No results to display.',
  },
  loading: {
    rowKey: 'row-loading',
    cellKey: 'cell-loading',
    children: <LoadingSpinner />,
  },
};

export const RowWithoutColumns = ({ colSpan, type }: RowWithoutColumnsProps): JSX.Element => {
  return (
    <Row key={options[type].rowKey}>
      <Cell colSpan={colSpan} key={options[type].cellKey} className="has-text-centered">
        {options[type].children}
      </Cell>
    </Row>
  );
};
