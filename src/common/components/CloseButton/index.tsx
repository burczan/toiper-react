import React from 'react';
import cx from 'classnames';
import { Size } from '../bulmaTypes';

type CloseButtonProps = {
  onClick?: () => void;
  size?: Size;
};

export const CloseButton = ({
  onClick,
  size = undefined,
}: CloseButtonProps) => {
  return (
    <button
      type="button"
      className={cx('delete', size)}
      aria-label="close"
      onClick={onClick}
    />
  );
};
