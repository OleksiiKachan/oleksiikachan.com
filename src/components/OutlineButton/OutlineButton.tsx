import React, { ReactNode } from 'react';
import classNames from 'classnames';
import './OutlineButton.scss';

/*
    <OutlineButton
      onClick=() => void
      type=''
      className=''
    >
      children
    </OutlineButton>
*/

type PropsType = {
  onClick: () => void;
  type: string;
  children: ReactNode;
  className?: string;
};

export default ({ onClick, type, children, className }: PropsType) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        'outlineButton',
        `outlineButton_${type}`,
        className
      )}
    >
      {children}
    </button>
  );
};
