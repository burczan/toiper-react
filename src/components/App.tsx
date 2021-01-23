import React from 'react';
import { useActions } from '../hooks';

export const App = (): JSX.Element => {
  const { removePaper } = useActions();

  return (
    <div>
      <h1>Hello world</h1>
      <button type="button" onClick={() => removePaper('id')}>Remove</button>
    </div>
  );
};
