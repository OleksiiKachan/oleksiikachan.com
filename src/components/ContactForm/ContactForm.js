import React, { Component } from 'react';
import classNames from 'classnames';
import './ContactForm.css';

/*
    <ContactForm onSubmit={} />
*/
class ContactForm extends Component {
    render() {
        return (
            <div className={classNames('contactFormContainer')}>
                <form id='contactForm' className={classNames('contactForm')} action='' method='post'>
                    <h3 className={classNames('contactForm__title')}>Contact me</h3>
                    <fieldset className={classNames('contactForm__contactField')}>
                        <input className={classNames('contactForm__contactControl')} placeholder="Your name" type="text" tabindex="1" required autofocus/>
                    </fieldset>
                    <fieldset className={classNames('contactForm__contactField')}>
                        <input className={classNames('contactForm__contactControl')} placeholder="Your Email Address" type="email" tabindex="2" required/>
                    </fieldset>
                    <fieldset className={classNames('contactForm__contactField')}>
                        <input className={classNames('contactForm__contactControl')} placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required/>
                    </fieldset>
                    <fieldset className={classNames('contactForm__contactField')}>
                        <input className={classNames('contactForm__contactControl')} placeholder="Your Web Site (optional)" type="url" tabindex="4" required/>
                    </fieldset>
                    <fieldset className={classNames('contactForm__contactField')}>
                        <textarea className={classNames('contactForm__contactControl', 'contactForm__contactControl_multipleRow')}  placeholder="Type your message here...." tabindex="5" required></textarea>
                    </fieldset>
                    <fieldset className={classNames('contactForm__contactField', 'contactForm__contactField_button')}>
                        <button className={classNames('contactForm__contactControl', 'contactForm__submitButton')} name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default ContactForm;
