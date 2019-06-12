import React from 'react';
import classNames from 'classnames';
import './Footer.scss';
import SocialMediaButton from '../SocialMediaButton';

/*
    <Footer resources={} className='' />
*/

type PropsType = {
  smContacts: Array<{ type: string; url: string }>;
  contacts: {
    phone: string;
    email: string;
    location: string;
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
              {contacts.email}
            </li>
            <li className={classNames('footer__contactsItem')}>
              {contacts.phone}
            </li>
            <li className={classNames('footer__contactsItem')}>
              {contacts.location}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
