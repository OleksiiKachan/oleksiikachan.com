import React from 'react';
import classNames from 'classnames';
import './CoverImage.scss';
import { SocialMediaButton } from '../../../elements';

/*
    <CoverImage
      name=''
      title=''
      resumeUrl=''
      contacts={}
      className=''
    />
*/

type PropsType = {
  name: string;
  title: string;
  resumeUrl: string;
  contacts: Array<{ type: string; url: string }>;
  className?: string;
};

export default ({ name, title, resumeUrl, contacts, className }: PropsType) => {
  return (
    <div className={classNames('coverImage', className)}>
      <div className={classNames('coverImage__text')}>
        <h1 className={classNames('coverImage__title')}>{name}</h1>
        <h2 className={classNames('coverImage__subtitle')}>{title}</h2>
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={classNames('coverImage__resumeLink')}
        >
          Printable CV
        </a>
      </div>
      <div className={classNames('coverImage__contacts')}>
        {contacts.map(item => {
          return (
            <SocialMediaButton
              key={contacts.indexOf(item)}
              type={item.type}
              url={item.url}
              className={classNames('coverImage__contactsItem')}
              style={{
                animationDelay: `${300 + contacts.indexOf(item) * 100}ms`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
