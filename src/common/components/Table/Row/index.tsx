import React from 'react';
import { RowProps } from '../model';

export const Row = ({ children }: RowProps) => {
  return (
    <tr>
      {children}
    </tr>
  );
};
