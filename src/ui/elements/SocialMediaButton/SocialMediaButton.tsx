import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import './SocialMediaButton.scss';

/*
    <SocialMediaButton
      type=''
      url=''
      className=''
      style={}
    />
*/

type PropsType = {
  type: string;
  url: string;
  className?: string;
  style?: CSSProperties;
};

export default ({ type, url, className, style }: PropsType) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={classNames('socialMediaButton', className)}
      style={style}
    >
      <i
        className={classNames(
          'socialMediaButton__icon',
          `socialMediaButton__icon-${type}`
        )}
      />
    </a>
  );
};
