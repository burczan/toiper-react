import React, { useEffect, useRef } from 'react';
import cx from 'classnames';
import s from './style.module.css';

type InputProps = {
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  htmlFor: string;
  name: string;
  type: 'text' | 'number';
  placeholder?: string;
  autofocus?: boolean;
  center?: boolean;
  width?: number;
  required?: boolean;
  label?: string;
  min?: number;
  max?: number;
  disabled?: boolean;
};

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  htmlFor,
  name,
  type,
  placeholder = '',
  autofocus = false,
  center = false,
  width = undefined,
  required = false,
  min = undefined,
  max = undefined,
  label = undefined,
  disabled = false,
}) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autofocus) {
      if (ref && ref.current) {
        ref.current.focus();
      }
    }
  }, [autofocus]);

  return (
    <div className="field">
      {label && <label htmlFor={htmlFor} className="label">{label}</label>}
      <div
        className={cx('control', { [s.center]: center })}
        style={width ? { width: `${width}%` } : undefined}
      >
        <input
          id={htmlFor}
          name={name}
          ref={ref}
          type={type}
          className="input"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          min={min}
          max={max}
          disabled={disabled}
        />
      </div>
    </div>
  );
};
