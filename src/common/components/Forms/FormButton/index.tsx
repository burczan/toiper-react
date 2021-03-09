import React from 'react';
import { Button, ButtonProps } from '../../Button';

type FormButtonProps = {
  horizontal?: boolean;
};

export const FormButton: React.FC<ButtonProps & FormButtonProps> = ({
  type,
  color,
  children,
  horizontal = false,
}) => {
  const button = (
    <div className="field">
      <div className="control">
        <Button color={color} type={type}>
          {children}
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {horizontal
        ? (
          <div className="field is-horizontal">
            <div className="field-label">
              {/* Left empty for spacing */}
            </div>
            <div className="field-body">
              {button}
            </div>
          </div>
        )
        : (
          <>
            {button}
          </>
        )}
    </>
  );
};
