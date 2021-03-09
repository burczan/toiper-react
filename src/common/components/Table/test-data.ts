import { Column } from './model';

export type Data = {
  name: string;
  description: string;
  score: number;
};

export const columns: Column<keyof Data>[] = [
  {
    key: 'name',
    label: 'Name',
    sortable: true,
  },
  {
    key: 'description',
    label: 'Description',
  },
  {
    key: 'score',
    label: 'Score',
    sortable: true,
  },
];

export const data: Data[] = [
  {
    name: 'axios',
    description: 'Promise based HTTP client for the browser and node.js',
    score: 100000.65,
  },
  {
    name: 'superagent',
    description: 'elegant & feature rich browser / node HTTP with a fluent API',
    score: 0.29968783,
  },
  {
    name: 'got',
    description: 'Human-friendly and powerful HTTP request library for Node.js',
    score: 0.069230266,
  },
];
