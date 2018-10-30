import React, { Component } from 'react';
import classNames from 'classnames';
import './ContactInfoPanel.scss';
import ContactInfoItem from '../ContactInfoItem';
import PhoneIcon from './phone.svg';
import EmailIcon from './email.svg';
import LocationIcon from './location.svg';

/*
    <ContactInfoPanel contact={} />
*/
class ContactInfoPanel extends Component {
  constructor(props) {
    super(props);

    this.contacts = [
      {
        icon: PhoneIcon,
        text: this.props.contacts.phone,
      },
      {
        icon: EmailIcon,
        text: this.props.contacts.email,
      },
      {
        icon: LocationIcon,
        text: this.props.contacts.location,
      },
    ];
  }

  render() {
    return (
      <div className={classNames('contactInfoContainer')}>
        <h3 className={classNames('contactInfo__title')}>Contacts</h3>
        {this.contacts.map(contact => {
          return <ContactInfoItem icon={contact.icon} text={contact.text} />;
        })}
      </div>
    );
  }
}

export default ContactInfoPanel;
