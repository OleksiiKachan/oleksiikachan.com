import React, { ReactNode } from 'react';
import classNames from 'classnames';
import './TechBadge.scss';

/*
    <TechBadge>{''}</TechBadge>
*/

type PropsType = {
  children: ReactNode;
  type: string;
  className?: string;
};

export default ({ children, type, className }: PropsType) => {
  return (
    <span className={classNames('techBadge', `techBadge_${type}`, className)}>
      {children}
    </span>
  );
};
