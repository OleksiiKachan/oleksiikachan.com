import React, { Component } from 'react';
import ContactSection from './ContactSection/ContactSection';

/*
    <ContactContainer contacts={} className='' />
*/
class ContactContainer extends Component<any, any> {
  render() {
    const dataStore = require('../../../data.json');
    return <ContactSection contacts={dataStore.contacts} />;
  }
}

export default ContactContainer;
