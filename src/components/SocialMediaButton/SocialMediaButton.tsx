import React from 'react';
import classNames from 'classnames';
import './SocialMediaButton.scss';

/*
    <SocialMediaButton
      type=''
      url=''
    `className=''
    />
*/

type PropsType = {
  type: string;
  url: string;
  className?: string;
};

export default ({ type, url, className }: PropsType) => {
  return (
    <a
      href={url}
      target="_blank"
      className={classNames('socialMediaButton', className)}
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
