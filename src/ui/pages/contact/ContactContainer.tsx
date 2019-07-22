import React, { Component } from 'react';
import ContactSection from './ContactSection/ContactSection';

/*
    <ContactContainer />
*/

export default class ContactContainer extends Component<any, any> {
  render() {
    const dataStore = require('../../../data.json');
    return <ContactSection contacts={dataStore.contacts} />;
  }
}
