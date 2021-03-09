/* eslint-disable react/button-has-type */
import React from 'react';
import cx from 'classnames';
import { Color } from '../types';

export type ButtonProps = {
  children: string;
  color: Color;
  type?: 'submit' | 'reset' | 'button';
};

export const Button: React.FC<ButtonProps> = ({
  children,
  color,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      className={cx('button', `is-${color}`)}
    >
      {children}
    </button>
  );
};
