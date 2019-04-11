import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import './OutlineButton.scss';

/*
    <OutlineButton onClick=() className=''/>
*/
type PropsType = {
  onClick: () => void;
  children: ReactNode;
  className?: string;
};

export default ({ onClick, children, className }: PropsType) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames('outlineButton', className)}
    >
      {children}
    </button>
  );
};
