import React, { Component } from 'react';
import classNames from 'classnames';
import './ContactInfoPanel.css';
import ContactInfoItem from '../ContactInfoItem/ContactInfoItem.js';
import PhoneIcon from './phone.svg';
import EmailIcon from './email.svg';
import LocationIcon from './location.svg';

/*
    <ContactInfoPanel contact={} />
*/
class ContactInfoPanel extends Component {
    render() {
        const contacts = [
            {
                icon: PhoneIcon,
                text: this.props.contacts.phone
            },
            {
                icon: EmailIcon,
                text: this.props.contacts.email
            },
            {
                icon: LocationIcon,
                text: this.props.contacts.location
            }
        ];
        return (
            <div className={classNames('contactInfoContainer')}>
                <h3 className={classNames('contactInfo__title')}>Contacts</h3>
                {
                    contacts.map(contact => {
                        return(
                            <ContactInfoItem icon={contact.icon} text={contact.text} />
                        );
                    })
                }
            </div>
        );
    }
}

export default ContactInfoPanel;