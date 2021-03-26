import React from 'react';
import cx from 'classnames';
import { Color } from '../bulmaTypes';

type HeroProps = {
  title: string;
  subtitle: string;
  color?: Color;
  size?: 'is-small' | 'is-medium' | 'is-large' | 'is-halfheight' | 'is-fullheight'
};

export const Hero = ({
  title,
  subtitle,
  color,
  size,
}: HeroProps) => {
  return (
    <section className={cx('hero', color, size)}>
      <div className="hero-body">
        <div className="container has-text-centered">
          <p className="title is-1 is-spaced">
            {title}
          </p>
          <p className="subtitle is-3">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};
