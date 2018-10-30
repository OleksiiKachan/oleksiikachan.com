import React, { Component } from 'react';
import Footer from '../../components/Footer';

/*
    <FooterContainer resources={} className=''/>
*/
class FooterContainer extends Component {
  render() {
    return (
      <Footer
        resources={this.props.resources}
        className={this.props.className}
      />
    );
  }
}

export default FooterContainer;
