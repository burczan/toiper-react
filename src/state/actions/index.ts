import { ActionTypes } from '../actionTypes';
import { PaperTypes } from '../paper';

export interface AddPaperAction {
  type: ActionTypes.ADD_PAPER;
  payload: {
    id: string;
    type: PaperTypes;
  }
}

export interface RemovePaperAction {
  type: ActionTypes.REMOVE_PAPER;
  payload: {
    id: string;
  }
}

export type Action = AddPaperAction | RemovePaperAction;
