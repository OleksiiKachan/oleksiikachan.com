import React, { Component } from 'react';
import classNames from 'classnames';
import './ContactForm.scss';

/*
    <ContactForm />
*/
class ContactForm extends Component<any, any> {
  render() {
    return (
      <div className={classNames('contactFormContainer', this.props.className)}>
        <h2 className={classNames('contactFormContainer__title')}>
          Contact Me
        </h2>
        <form
          className={classNames('contactForm')}
          autoComplete="off"
          action="https://formspree.io/alexkachan.lutsk@gmail.com"
          method="post"
        >
          <div>
            <div className={classNames('contactForm__field')}>
              <input
                type="text"
                name="title"
                className={classNames('contactForm__input')}
                autoComplete="off"
                required
              />
              <label className={classNames('contactForm__label')}>
                Your name
              </label>
            </div>
            <div className={classNames('contactForm__field')}>
              <input
                type="text"
                name="contact"
                className={classNames('contactForm__input')}
                autoComplete="off"
                required
              />
              <label className={classNames('contactForm__label')}>
                Your email
              </label>
            </div>
          </div>
          <div className={classNames('contactForm__field')}>
            <input
              type="text"
              name="message"
              className={classNames('contactForm__input')}
              autoComplete="off"
              required
            />
            <label className={classNames('contactForm__label')}>
              Your message
            </label>
          </div>
          <input
            type="submit"
            name="submit"
            value="Submit"
            className={classNames('contactForm__submitButton')}
          />
        </form>
      </div>
    );
  }
}

export default ContactForm;
