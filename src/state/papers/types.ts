export enum PapersActionType {
  ADD_PAPER = 'add_paper',
  REMOVE_PAPER = 'remove_paper',
}

export type PaperTypes = 'toilet' | 'towel';

export type PaperProps = {
  id: string;
  type: PaperTypes;
};
