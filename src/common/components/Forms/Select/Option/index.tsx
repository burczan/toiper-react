import React from 'react';

export type OptionProps = {
  value: string;
  children: string;
};

export const Option = ({
  value,
  children,
}: OptionProps) => {
  return (
    <option value={value}>{children}</option>
  );
};
