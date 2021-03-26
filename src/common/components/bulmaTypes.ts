export type Color =
  'is-primary' |
  'is-link' |
  'is-info' |
  'is-success' |
  'is-warning' |
  'is-danger';

export type Size = 'is-small' | 'is-medium' | 'is-large' | undefined;

const gridSize = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;
export type ColumnGridSize = typeof gridSize[number];

export type ColumnSize =
  'is-three-quarters' |
  'is-two-thirds' |
  'is-half' |
  'is-one-third' |
  'is-one-quarter' |
  'is-full';
