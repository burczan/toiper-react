import { PapersActionType, PaperProps } from './types';

export type AddPaperAction = {
  type: PapersActionType.ADD_PAPER;
  payload: PaperProps;
};

export type RemovePaperAction = {
  type: PapersActionType.REMOVE_PAPER;
  payload: {
    id: string;
  };
};

export type PaperAction = AddPaperAction | RemovePaperAction;
