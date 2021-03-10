import produce from 'immer';
import { PapersActionType, PaperProps } from './types';
import { PaperAction } from './actions';

type PaperState = PaperProps[];

const initialState: PaperState = [];

export const papers = produce((
  state: PaperState = initialState,
  action: PaperAction,
): PaperState => {
  switch (action.type) {
    case PapersActionType.ADD_PAPER: {
      return [...state, action.payload];
    }
    case PapersActionType.EDIT_PAPER: {
      return [...state, action.payload];
    }
    case PapersActionType.REMOVE_PAPER:
      return state.filter((paper) => paper.id !== action.payload.id);
    default:
      return state;
  }
});
