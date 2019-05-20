import React, { Component } from 'react';
import Footer from '../../components/Footer';

/*
    <FooterContainer resources={} className=''/>
*/
class FooterContainer extends Component<any, any> {
  render() {
    const dataStore = require('../../data.json');
    return (
      <Footer smContacts={dataStore.smContacts} contacts={dataStore.contacts} />
    );
  }
}

export default FooterContainer;
