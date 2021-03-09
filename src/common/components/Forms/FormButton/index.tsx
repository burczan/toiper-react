import React from 'react';
import { Button, ButtonProps } from '../../Button';

export const FormButton: React.FC<ButtonProps> = ({
  type,
  color,
  children,
}) => {
  return (
    <div className="field">
      <div className="control">
        <Button color={color} type={type}>
          {children}
        </Button>
      </div>
    </div>
  );
};
