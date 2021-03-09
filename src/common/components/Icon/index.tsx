import React from 'react';
import cx from 'classnames';
import s from './style.module.css';

type Props = {
  name: string;
};

export const Icon: React.FC<Props> = ({ name }) => {
  return (
    <i className={cx('material-icons', s.align)} title={name}>{name}</i>
  );
};
