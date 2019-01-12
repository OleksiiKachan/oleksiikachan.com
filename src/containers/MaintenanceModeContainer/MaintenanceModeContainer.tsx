import React, { Component } from 'react';
import './MaintenanceModeContainer.scss';
import ContactForm from '../../components/ContactForm';
import message from './message.png';
import arrow from './arrow.png';
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
            alt="man working on laptop"
            className={classNames('maintainImage_message')}
          />
          <img
            src={arrow}
            alt="man working on laptop"
            className={classNames('maintainImage_arrow')}
          />
        </div>
      </div>
    );
  }
}

export default MaintenanceModeContainer;
