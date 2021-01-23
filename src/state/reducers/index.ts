import { combineReducers } from 'redux';
import { papersReducer } from './papersReducer';

export const reducers = combineReducers({
  papers: papersReducer,
});

export type RootState = ReturnType<typeof reducers>;
