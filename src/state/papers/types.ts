export enum PapersActionType {
  ADD_PAPER = 'add_paper',
  REMOVE_PAPER = 'remove_paper',
}

export enum PaperTypes {
  'toilet' = 'toilet',
  'towel' = 'towel',
}

export type PaperProps = {
  id: string;
  type: PaperTypes;
  name: string;
  price: number;
  layers: number;
  leafs: number;
  layerPrice: number;
};
