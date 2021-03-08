import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { papers } from './papers/reducer';
import { addPaper, removePaper } from './papers/actionCreators';

const reducers = combineReducers({
  papers,
});

export const actionCreators = {
  addPaper,
  removePaper,
};

const composeEnhancers = composeWithDevTools({ actionCreators });

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);

export type RootState = ReturnType<typeof reducers>;
