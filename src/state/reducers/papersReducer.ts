import produce from 'immer';
import { ActionTypes } from '../actionTypes';
import { Action } from '../actions';
import { Paper } from '../paper';

interface PaperState {
  loading: boolean;
  error: string | null;
  data: {
    [key: string]: Paper
  }
}

const initialState: PaperState = {
  loading: false,
  error: null,
  data: {},
};

export const papersReducer = produce((state: PaperState = initialState, action: Action): PaperState => {
  switch (action.type) {
    case ActionTypes.ADD_PAPER: {
      const { id, type } = action.payload;
      state.data[id].type = type;
      return state;
    }
    case ActionTypes.REMOVE_PAPER:
      delete state.data[action.payload.id];
      return state;
    default:
      return state;
  }
});
