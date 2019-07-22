import React from 'react';
import classNames from 'classnames';
import './ContactSection.scss';
import ContactForm from './ContactForm/ContactForm';
import ContactInfoPanel from './ContactInfoPanel/ContactInfoPanel';

/*
    <ContactSection
      contacts={}
      className=''
    />
*/

type PropsType = {
  contacts: {
    phone: string;
    email: string;
    location: string;
  };
  className?: string;
};

export default ({ contacts, className }: PropsType) => {
  return (
    <div id="contact" className={classNames('contactSection', className)}>
      <h2 className={classNames('contactSection__title')}>Get In Touch</h2>
      <div className={classNames('contactSection__content')}>
        <div className={classNames('contactSection__contactColumn')}>
          <ContactForm />
        </div>
        <div className={classNames('contactSection__contactColumn')}>
          <ContactInfoPanel contacts={contacts} />
        </div>
      </div>
    </div>
  );
};
