import React, { Component } from 'react';
import classNames from 'classnames';
import OutlineButton from '../../OutlineButton';
import Textbox from '../../Textbox';
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
      <h2 className={classNames('contactForm__title')}>Contact Me</h2>
      <form
        className={classNames('contactForm__form')}
        autoComplete="off"
        action="https://formspree.io/alexkachan.lutsk@gmail.com"
        method="post"
      >
        <div>
          <Textbox fieldName="name" label="Your name" required />
          <Textbox fieldName="email" label="Your email" type="email" required />
        </div>
        <Textbox fieldName="message" label="Your message" required />
        <OutlineButton type="gold" onClick={() => {}} isSubmit>
          Submit
        </OutlineButton>
      </form>
    </div>
  );
};
