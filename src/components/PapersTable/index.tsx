import React, { useEffect, useState } from 'react';
// import cx from 'classnames';
// import { Input } from '../../common/components/Forms';
// import { ErrorMessage } from '../../common/components/ErrorMessage';
import { Table } from '../../common/components/Table';
import { Column } from '../../common/components/Table/model';
import { useTypedSelector } from '../../common/hooks';
import { PaperProps } from '../../state/papers/types';
// import s from './style.module.css';

export const PapersTable: React.FC = () => {
  const { papers } = useTypedSelector((state) => state);
  const columns: Column<keyof PaperProps>[] = [
    {
      key: 'name',
      label: 'Name',
      sortable: true,
    },
    {
      key: 'layers',
      label: 'Number of layers',
      sortable: true,
    },
    {
      key: 'leafs',
      label: 'Number of leafs',
      sortable: true,
    },
    {
      key: 'price',
      label: 'Price',
      sortable: true,
    },
    {
      key: 'layerPrice',
      label: 'LayerPrice',
      sortable: true,
    },
  ];

  return (
    <div>
      <Table
        data={papers}
        columns={columns}
        isLoading={false}
      />
    </div>
  );
};
