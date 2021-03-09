export type Column<Key> = {
  key: Key;
  label: string;
  sortable?: boolean;
  width?: number;
};

type Columns<Data> = Column<keyof Data>[];

export type TableProps<Data> = {
  data: Data[];
  columns: Columns<Data>;
  isLoading: boolean;
  pagination?: boolean;
};

export type BodyProps<Data> = Omit<TableProps<Data>, 'pagination'>;

export type Filters<Data> = {
  order?: 'asc' | 'desc';
  orderBy?: keyof Data;
};

type SetFilters<Data> = React.Dispatch<React.SetStateAction<Filters<Data>>>;

export type HeaderProps<Data> = {
  columns: Columns<Data>;
  filters: Filters<Data>;
  onChangeSort: SetFilters<Data>;
};

export type CellProps = {
  children: React.ReactNode;
  className?: string;
  colSpan?: number;
};

export type RowProps = {
  children: React.ReactNode;
};

export type RowsPerPageSelectorProps = {
  options: number[];
  rowsPerPage: number;
  onSelectorChange: (option: number) => void;
};

export type PaginationProps = {
  currentPage: number;
  totalPageNumber: number;
  onPageChange: (page: number) => void;
};

export type PaginationConfig<Data> = {
  dataOnCurrentPage: Data[];
  currentPage: number;
  totalPageNumber: number;
  rowsPerPage: number;
  rowsPerPageOptions: number[];
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>;
};

export type SortingConfig<Data> = {
  sortedDataset: Data[];
  filters: Filters<Data>;
  setFilters: SetFilters<Data>;
};
