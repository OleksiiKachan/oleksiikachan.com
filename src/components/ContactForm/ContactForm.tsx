import React, { Component } from 'react';
import classNames from 'classnames';
import './ContactForm.scss';

/*
    <ContactForm />
*/
class ContactForm extends Component<any, any> {
  render() {
    return (
      <div className={classNames('contactFormContainer')}>
        <form
          id="contactForm"
          className={classNames('contactForm')}
          action="https://formspree.io/alexkachan.lutsk@gmail.com"
          method="post"
        >
          <h3 className={classNames('contactForm__title')}>Contact me</h3>
          <fieldset className={classNames('contactForm__contactField')}>
            <input
              className={classNames('contactForm__contactControl')}
              placeholder="Your name"
              type="text"
              name="name"
              required
            />
          </fieldset>
          <fieldset className={classNames('contactForm__contactField')}>
            <input
              className={classNames('contactForm__contactControl')}
              placeholder="Your Email Address"
              type="email"
              name="email"
              required
            />
          </fieldset>
          <fieldset className={classNames('contactForm__contactField')}>
            <input
              className={classNames('contactForm__contactControl')}
              placeholder="Your Phone Number (optional)"
              type="tel"
              name="phone"
            />
          </fieldset>
          <fieldset className={classNames('contactForm__contactField')}>
            <input
              className={classNames('contactForm__contactControl')}
              placeholder="Your Web Site (optional)"
              type="url"
              name="site"
            />
          </fieldset>
          <fieldset className={classNames('contactForm__contactField')}>
            <textarea
              className={classNames(
                'contactForm__contactControl',
                'contactForm__contactControl_multipleRow'
              )}
              placeholder="Type your message here...."
              name="message"
            />
          </fieldset>
          <fieldset
            className={classNames(
              'contactForm__contactField',
              'contactForm__contactField_button'
            )}
          >
            <button
              className={classNames(
                'contactForm__contactControl',
                'contactForm__submitButton'
              )}
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default ContactForm;
