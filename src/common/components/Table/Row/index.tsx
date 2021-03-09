import React from 'react';
import { RowProps } from '../model';

export const Row: React.FC<RowProps> = ({ children }) => {
  return (
    <tr>
      {children}
    </tr>
  );
};
