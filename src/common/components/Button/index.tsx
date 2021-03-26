/* eslint-disable react/button-has-type */
import React from 'react';
import cx from 'classnames';
import { Color } from '../bulmaTypes';

export type ButtonProps = {
  children: React.ReactNode;
  color?: Color;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  className?: string;
};

export const Button = ({
  children,
  color,
  onClick,
  type = 'button',
  disabled = false,
  className = undefined,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={cx('button', color, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
