import React, { Component } from 'react';
import ContactSection from '../../components/ContactSection';

/*
    <ContactContainer contacts={} className='' />
*/
class ContactContainer extends Component<any, any> {
  render() {
    return (
      <ContactSection
        contacts={this.props.contacts}
        className={this.props.className}
      />
    );
  }
}

export default ContactContainer;
