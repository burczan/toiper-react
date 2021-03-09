import React from 'react';

type LabelProps = {
  htmlFor: string;
  children: string;
  horizontal?: boolean;
};

export const Label: React.FC<LabelProps> = ({
  htmlFor,
  children,
  horizontal = false,
}) => {
  const label = (
    <label htmlFor={htmlFor} className="label">
      {children}
    </label>
  );

  return (
    <>
      {horizontal
        ? (
          <div className="field-label is-normal">
            {label}
          </div>
        )
        : (
          <>
            {label}
          </>
        )}
    </>
  );
};
