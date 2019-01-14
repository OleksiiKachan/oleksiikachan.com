import React, { Component } from 'react';
import './MaintenanceModeContainer.scss';
import ContactForm from '../../components/ContactForm';
import message from './message.png';
import arrow from './arrow.png';
import arrowText from './arrow_text.png';
import classNames from 'classnames';

/*
    <MaintenanceModeContainer className='' />
*/
class MaintenanceModeContainer extends Component<any, any> {
  render() {
    return (
      <div
        className={classNames('maintenanceModeContainer', this.props.className)}
      >
        <ContactForm
          className={classNames('maintenanceModeContainer__contactForm')}
        />
        <div className={classNames('maintenanceModeContainer__imageSection')}>
          <img
            src={message}
            alt="Site is on maintainance"
            className={classNames('maintainImage_message')}
          />
          <div className={classNames('maintainImage_arrowSection')}>
            <img
              src={arrow}
              alt="arrow head"
              className={classNames('maintainImage_arrow')}
            />
            <img
              src={arrowText}
              alt="but you still can contact me"
              className={classNames('maintainImage_arrowText')}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MaintenanceModeContainer;
