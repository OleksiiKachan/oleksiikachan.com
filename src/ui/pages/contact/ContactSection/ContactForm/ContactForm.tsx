import React from 'react';
import classNames from 'classnames';
import { OutlineButton, Textbox } from '../../../../elements';
import './ContactForm.scss';

/*
    <ContactForm
      className=''
    />
*/

type PropsType = {
  className?: string;
};

export default ({ className }: PropsType) => {
  return (
    <div className={classNames('contactForm', className)}>
      <h3 className={classNames('contactForm__title')}>Contact Me</h3>
      <form
        className={classNames('contactForm__form')}
        autoComplete="off"
        action="https://formspree.io/alexkachan.lutsk@gmail.com"
        method="POST"
      >
        <div>
          <Textbox fieldName="name" label="Your name" required />
          <Textbox
            fieldName="_replyto"
            label="Your email"
            type="email"
            required
          />
        </div>
        <Textbox fieldName="message" label="Your message" required />
        <OutlineButton type="gold" onClick={() => {}} isSubmit>
          Submit
        </OutlineButton>
      </form>
    </div>
  );
};
