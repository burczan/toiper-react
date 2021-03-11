import React from 'react';
import { Color } from '../../types';

type HelpProps = {
  color: Color;
  children: string;
};

export const Help = ({ color, children }: HelpProps) => {
  return (
    <p className={`help is-${color}`}>{children}</p>
  );
};
