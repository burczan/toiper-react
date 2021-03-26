import React from 'react';
import cx from 'classnames';
import { Color } from '../bulmaTypes';
import s from './style.module.css';

type NotificationProps = {
  children: React.ReactNode;
  color?: Color;
  halfWidth?: boolean;
};

export const Notification = ({ children, color, halfWidth = false }: NotificationProps) => {
  return (
    <div className={cx('notification', color, s.center, { [s.halfWidth]: halfWidth })}>
      {children}
    </div>
  );
};
