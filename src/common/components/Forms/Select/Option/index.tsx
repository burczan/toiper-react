import React from 'react';

export type OptionProps = {
  value: string;
  children: string;
};

export const Option: React.FC<OptionProps> = ({
  value,
  children,
}) => {
  return (
    <option value={value}>{children}</option>
  );
};
