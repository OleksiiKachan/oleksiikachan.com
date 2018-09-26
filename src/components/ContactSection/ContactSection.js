import React, { Component } from 'react';
import classNames from 'classnames';
import './ContactSection.css';
import ContactForm from '../ContactForm/ContactForm.js';
import ContactInfoPanel from '../ContactInfoPanel/ContactInfoPanel.js';

/*
    <ContactSection contacts={} className='' />
*/
class ContactSection extends Component {
    render() {
        return (
            <div id='contact' className={classNames('contactSection', this.props.className)}>
                <h2 className={classNames('contactSection__title')}>Get In Touch</h2>
                <div className={classNames('contactSection__content')}>
                    <div className={classNames('contactSection__contactColumn', 'contactSection__contactForm')}>
                        <ContactForm />
                    </div>
                    <div className={classNames('contactSection__contactColumn', 'contactSection__contactInfo')}>
                        <ContactInfoPanel contacts={this.props.contacts} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactSection;