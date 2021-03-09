/* eslint-disable react/button-has-type */
import React from 'react';
import cx from 'classnames';
import { Color } from '../types';

export type ButtonProps = {
  children: React.ReactNode;
  color: Color;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
};

export const Button: React.FC<ButtonProps> = ({
  children,
  color,
  onClick,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      className={cx('button', `is-${color}`)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
