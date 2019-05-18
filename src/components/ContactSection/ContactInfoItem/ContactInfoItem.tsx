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
  content: string;
  className?: string;
};

export default ({ icon, iconAlt, content, className }: PropsType) => {
  return (
    <div className={classNames('contactInfoItem', className)}>
      <img
        className={classNames('contactInfoItem__icon')}
        src={icon}
        alt={iconAlt}
      />
      <p className={classNames('contactInfoItem__content')}>{content}</p>
    </div>
  );
};
