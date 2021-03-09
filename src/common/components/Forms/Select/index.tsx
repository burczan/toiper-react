import React from 'react';
import { Option, OptionProps } from './Option';

type SelectProps = {
  label: string;
  children: OptionProps[];
  htmlFor: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
};

export const Select: React.FC<SelectProps> = ({
  label,
  children,
  htmlFor,
  onChange,
  value,
}) => {
  return (
    <div className="field">
      <label htmlFor={htmlFor} className="label">{label}</label>
      <div className="control">
        <div className="select">
          <select id={htmlFor} value={value} name="types" onChange={onChange}>
            {children.map((option) => (
              <Option value={option.value} key={option.value}>
                {option.children}
              </Option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
