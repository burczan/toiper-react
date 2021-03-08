import React from 'react';
import { useDispatch } from 'react-redux';
import { removePaper } from '../state/papers/actionCreators';
import { useTypedSelector } from '../common/hooks/useTypedSelector';

export const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const { papers } = useTypedSelector((state) => state);

  return (
    <div>
      <h1>Hello world</h1>
      <button type="button" onClick={() => dispatch(removePaper('id'))}>Remove</button>
      {console.log(papers)}
    </div>
  );
};
