import React, { useEffect, useRef } from 'react';
import cx from 'classnames';
import { Label } from '../Label';
import { Help } from '../Help';
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
  step?: number;
  disabled?: boolean;
  horizontal?: boolean;
  helperText?: string;
};

export const Input = ({
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
  step = undefined,
  label = undefined,
  disabled = false,
  horizontal = false,
  helperText = undefined,
}: InputProps) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autofocus) {
      if (ref && ref.current) {
        ref.current.focus();
      }
    }
  }, [autofocus]);

  const input = (
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
        step={step}
        disabled={disabled}
      />
      {helperText && <Help color="is-danger">{helperText}</Help>}
    </div>
  );

  return (
    <div className={cx('field', { 'is-horizontal': horizontal })}>
      {label && (<Label htmlFor={htmlFor} horizontal={horizontal}>{label}</Label>)}
      {horizontal
        ? (
          <div className="field-body">
            <div className="field">
              {input}
            </div>
          </div>
        )
        : (
          <>
            {input}
          </>
        )}
    </div>
  );
};
