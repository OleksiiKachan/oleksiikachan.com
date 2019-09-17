import React from 'react';
import classNames from 'classnames';
import './Footer.scss';
import SocialMediaButton from '../SocialMediaButton/SocialMediaButton';

/*
    <Footer resources={} className='' />
*/

type PropsType = {
  smContacts: Array<{ type: string; url: string }>;
  contacts: {
    phone: { caption: string; url: string };
    email: { caption: string; url: string };
    location: { caption: string; url: string };
  };
  className?: string;
};

export default ({ smContacts, contacts, className }: PropsType) => {
  return (
    <footer className={classNames('footerWrapper', className)}>
      <div className={classNames('footer')}>
        <div className={classNames('footer__logoWrapper')}>
          <img
            src="https://res.cloudinary.com/oleksiikachan/image/upload/v1546142703/portfolio/images/logo/logo_horizontal_dark.svg"
            alt="Oleksii Kachan logo"
            className={classNames('footer__logo')}
          />
        </div>
        <div className={classNames('footer__contacts')}>
          <div className={classNames('footer__smLinks')}>
            {smContacts.map(item => {
              return (
                <div
                  key={smContacts.indexOf(item)}
                  className={classNames('footer__smButton')}
                >
                  <SocialMediaButton type={item.type} url={item.url} />
                </div>
              );
            })}
          </div>
          <ul className={classNames('footer__contactsList')}>
            <li className={classNames('footer__contactsItem')}>
              <a
                href={contacts.email.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                {contacts.email.caption}
              </a>
            </li>
            <li className={classNames('footer__contactsItem')}>
              <a
                href={contacts.phone.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                {contacts.phone.caption}
              </a>
            </li>
            <li className={classNames('footer__contactsItem')}>
              <a
                href={contacts.location.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                {contacts.location.caption}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
