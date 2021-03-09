import { useState, useMemo } from 'react';
import { Filters, SortingConfig } from '../components/Table/model';

const compare = <Item extends string | number>(a: Item, b: Item) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

const convert = <Item>(item: Item): string | number => {
  if (typeof item === 'string') {
    return item.toLowerCase();
  }

  return Number(item);
};

export const useSortableData = <Data>(dataset: Data[]): SortingConfig<Data> => {
  const initialFilters: Filters<Data> = {
    order: undefined,
    orderBy: undefined,
  };
  const [filters, setFilters] = useState(initialFilters);
  const sortedDataset = useMemo(() => {
    const { orderBy, order } = filters;

    if (order && orderBy) {
      const direction = order === 'desc' ? -1 : 1;
      return [...dataset]
        .sort((a, b) => {
          return compare(
            convert(a[orderBy]),
            convert(b[orderBy]),
          ) * direction;
        });
    }

    return dataset;
  }, [dataset, filters]);

  return { filters, setFilters, sortedDataset };
};
