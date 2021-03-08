import { AddPaperAction, RemovePaperAction } from './actions';
import { PapersActionType, PaperTypes } from './types';

export const addPaper = (id: string, type: PaperTypes): AddPaperAction => {
  return {
    type: PapersActionType.ADD_PAPER,
    payload: { id, type },
  };
};

export const removePaper = (id: string): RemovePaperAction => {
  return {
    type: PapersActionType.REMOVE_PAPER,
    payload: { id },
  };
};
