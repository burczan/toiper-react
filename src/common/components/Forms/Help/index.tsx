import React from 'react';
import { Color } from '../../bulmaTypes';

type HelpProps = {
  color: Color;
  children: string;
};

export const Help = ({ color, children }: HelpProps) => {
  return (
    <p className={`help ${color}`}>{children}</p>
  );
};
