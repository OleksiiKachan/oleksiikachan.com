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
  isSubmit?: boolean;
  className?: string;
};

export default ({
  onClick,
  type,
  children,
  isSubmit = false,
  className,
}: PropsType) => {
  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
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
