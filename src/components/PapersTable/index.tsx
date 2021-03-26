import React from 'react';
import { Table } from '../../common/components/Table';
import { Column } from '../../common/components/Table/model';
import { useTypedSelector } from '../../common/hooks';
import { getPapersByType } from '../../state/papers/selectors';
import { PaperTypes } from '../../state/papers/types';
import { Actions } from './Actions';

export const PapersTable = () => {
  const papers = useTypedSelector((state) => getPapersByType(state, PaperTypes.toilet));
  const papersWithActions = papers.map((paper) => ({
    ...paper,
    actions: <Actions paper={paper} />,
  }));

  const columns: Column<keyof typeof papersWithActions[number]>[] = [
    {
      key: 'name',
      label: 'Name',
      sortable: true,
    },
    {
      key: 'layers',
      label: 'Layers',
      sortable: true,
    },
    {
      key: 'length',
      label: 'Length',
      sortable: true,
    },
    {
      key: 'price',
      label: 'Price',
      sortable: true,
    },
    {
      key: 'oneMeterPrice',
      label: 'Price of 1 m',
      sortable: true,
    },
    {
      key: 'layerPrice',
      label: 'Price of 1 layer',
      sortable: true,
    },
    {
      key: 'actions',
      label: 'Actions',
    },
  ];

  return (
    <div>
      <Table
        data={papersWithActions}
        columns={columns}
        isLoading={false}
      />
    </div>
  );
};
