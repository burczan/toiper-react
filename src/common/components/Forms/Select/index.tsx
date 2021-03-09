import React from 'react';
import cx from 'classnames';
import { Label } from '../Label';
import { Option, OptionProps } from './Option';

type SelectProps = {
  label: string;
  children: OptionProps[];
  htmlFor: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  horizontal?: boolean;
};

export const Select: React.FC<SelectProps> = ({
  label,
  children,
  htmlFor,
  onChange,
  value,
  horizontal = false,
}) => {
  const select = (
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
  );

  return (
    <>
      <div className={cx('field', { 'is-horizontal': horizontal })}>
        <Label htmlFor={htmlFor} horizontal={horizontal}>{label}</Label>
        {horizontal
          ? (
            <div className="field-body">
              <div className="field is-narrow">
                {select}
              </div>
            </div>
          )
          : (
            <div className="field">
              {select}
            </div>
          )}
      </div>
    </>
  );
};
