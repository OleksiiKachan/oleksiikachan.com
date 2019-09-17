import React from 'react';
import classNames from 'classnames';
import './ContactInfoItem.scss';

/*
    <ContactInfoItem
      icon=''
      content=''
      className=''
    />
*/

type PropsType = {
  icon: string;
  iconAlt: string;
  content: { caption: string; url: string };
  className?: string;
};

export default ({ icon, iconAlt, content, className }: PropsType) => {
  return (
    <a href={content.url} className={classNames('contactInfoItem', className)}>
      <img
        className={classNames('contactInfoItem__icon')}
        src={icon}
        alt={iconAlt}
      />
      <p className={classNames('contactInfoItem__content')}>
        {content.caption}
      </p>
    </a>
  );
};
