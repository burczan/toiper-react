import React from 'react';
import cx from 'classnames';
import s from './style.module.css';

type Props = {
  message: string;
};

export const ErrorMessage: React.FC<Props> = ({ message }) => {
  return (
    <div className={cx('notification is-danger', s.center, s.width)}>
      {message}
    </div>
  );
};
