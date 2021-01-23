import { PaperTypes } from '../paper';
import { ActionTypes } from '../actionTypes';
import { AddPaperAction, RemovePaperAction } from '../actions';

export const addPaper = (id: string, type: PaperTypes): AddPaperAction => {
  return {
    type: ActionTypes.ADD_PAPER,
    payload: { id, type },
  };
};

export const removePaper = (id: string): RemovePaperAction => {
  return {
    type: ActionTypes.REMOVE_PAPER,
    payload: { id },
  };
};
