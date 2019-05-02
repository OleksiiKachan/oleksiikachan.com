import React, { Component } from 'react';
import classnames from 'classnames';
import './Header.scss';
import Navigation from '../Navigation';

/*
    <Header name='' title='' navigationItems=[]/>
*/
class Header extends Component<any, any> {
  render() {
    return (
      <header
        id="header"
        className={classnames('header', this.props.className)}
      >
        <Navigation
          onLinkClick={this.props.onLinkClick}
          navigationItems={this.props.navigationItems}
        />
      </header>
    );
  }
}

export default Header;
