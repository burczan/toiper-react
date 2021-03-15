import React from 'react';

type IconProps = {
  name: string;
  label?: string;
};

export const Icon = ({ name, label }: IconProps) => {
  return (
    <span className="icon-text">
      {label && <span>{label}</span>}
      <span className="icon">
        <i className={`fas fa-${name}`} />
      </span>
    </span>
  );
};
