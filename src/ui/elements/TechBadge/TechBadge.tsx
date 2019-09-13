import React, { ReactNode } from 'react';
import classNames from 'classnames';
import './TechBadge.scss';

/*
    <TechBadge>{''}</TechBadge>
*/

type PropsType = {
  children: ReactNode;
  type: string;
  style?: any;
  className?: string;
};

export default ({ children, type, style, className }: PropsType) => {
  return (
    <span
      style={style}
      className={classNames('techBadge', `techBadge_${type}`, className)}
    >
      {children}
    </span>
  );
};
