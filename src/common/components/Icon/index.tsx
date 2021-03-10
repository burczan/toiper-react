import React from 'react';
import cx from 'classnames';
import s from './style.module.css';

type IconProps = {
  name: string;
};

export const Icon = ({ name }: IconProps) => {
  return (
    <i className={cx('material-icons', s.align)} title={name}>{name}</i>
  );
};
