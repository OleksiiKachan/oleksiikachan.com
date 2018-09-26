import React, { Component } from 'react';
import classNames from 'classnames';
import './ContactInfoPanel.css';
import PhoneIcon from './phone.svg';
import EmailIcon from './email.svg';
import LocationIcon from './location.svg';

/*
    <ContactInfoPanel contact={} />
*/
class ContactInfoPanel extends Component {
    render() {
        return (
            <div className={classNames('contactInfoContainer')}>
                <h3 className={classNames('contactInfo__title')}>Contacts</h3>
                <div className={classNames('contactInfo__contactItem')}>
                    <img className={classNames('contactInfo__icon')} src={PhoneIcon} alt='phone' />
                    <p className={classNames('contactInfo__text')}>{this.props.contacts.phone}</p>
                </div>
                <div className={classNames('contactInfo__contactItem')}>
                    <img className={classNames('contactInfo__icon')} src={EmailIcon} alt='email' />
                    <p className={classNames('contactInfo__text')}>{this.props.contacts.email}</p>
                </div>
                <div className={classNames('contactInfo__contactItem')}>
                    <img className={classNames('contactInfo__icon')} src={LocationIcon} alt='location' />
                    <p className={classNames('contactInfo__text')}>{this.props.contacts.location}</p>
                </div>
            </div>
        );
    }
}

export default ContactInfoPanel;