import React from 'react';
import classNames from 'classnames';
import ContactInfoItem from '../ContactInfoItem/ContactInfoItem';
import './ContactInfoPanel.scss';

const icon_phone = require('../../../../assets/icons/phone.svg');
const icon_email = require('../../../../assets/icons/email.svg');
const icon_location = require('../../../../assets/icons/location.svg');

/*
    <ContactInfoPanel
      contact={}
      className=''
    />
*/

type PropsType = {
  contacts: {
    phone: { caption: string; url: string };
    email: { caption: string; url: string };
    location: { caption: string; url: string };
  };
  className?: string;
};

export default ({ contacts, className }: PropsType) => {
  const contactsData = [
    {
      icon: icon_phone,
      iconAlt: 'Phone icon',
      content: contacts.phone,
    },
    {
      icon: icon_email,
      iconAlt: 'Envelope icon',
      content: contacts.email,
    },
    {
      icon: icon_location,
      iconAlt: 'Compass icon',
      content: contacts.location,
    },
  ];
  return (
    <address className={classNames('contactInfoPanel', className)}>
      <h3 className={classNames('contactInfoPanel__title')}>Contacts</h3>
      {contactsData.map(contact => {
        return (
          <ContactInfoItem
            key={contactsData.indexOf(contact)}
            icon={contact.icon}
            iconAlt={contact.iconAlt}
            content={contact.content}
          />
        );
      })}
    </address>
  );
};
