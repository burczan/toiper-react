import React from 'react';

type LabelProps = {
  htmlFor: string;
  children: string;
  horizontal?: boolean;
};

export const Label = ({
  htmlFor,
  children,
  horizontal = false,
}: LabelProps) => {
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
