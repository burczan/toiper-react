import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '../../common/components/Icon';
import { Table } from '../../common/components/Table';
import { Column } from '../../common/components/Table/model';
import { getToiletPapers } from '../../state/papers/selectors';
import { Button } from '../../common/components/Button';
import { removePaper } from '../../state/papers/actionCreators';

export const PapersTable: React.FC = () => {
  const dispatch = useDispatch();
  const papers = useSelector(getToiletPapers);
  const papersWithActions = papers.map((paper) => ({
    ...paper,
    actions: (
      <Button color="danger" onClick={() => dispatch(removePaper(paper.id))}>
        <span className="icon">
          <Icon name="delete" />
        </span>
      </Button>
    ),
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

// useEffect(() => {
//   const theTbl = document.getElementsByTagName('tbody')[0];
//   console.log(theTbl.rows[0].cells[0].innerHTML);
//   // for (let i = 0; i < theTbl.length; i++) {
//   //   for (let j = 0; j < theTbl.rows[i].cells.length; j++) {
//   //     theTbl.rows[i].cells[j].onclick = () => {};
//   //   }
//   // }

//   // const findPaperRows = () => document.getElementsByTagName('tbody')[0].rows;
//   // const a = document.getElementsByTagName('table').rows[i].cells[j].innerHTML;
//   // const rows = findPaperRows();
//   // console.log(rows.namedItem('name'));
//   // Array.from(rows).forEach((row) => {
//   //   console.log('s', row.querySelector(selectors));
//   //   console.log('row', row.innerHTML, cheap[0].name);
//   // });
// }, [cheap]);
