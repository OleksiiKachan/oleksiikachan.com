import React, { Component } from 'react';
import classnames from 'classnames';
import './Header.scss';
import HeaderCover from '../HeaderCover';
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
        <HeaderCover name={this.props.name} title={this.props.title} />
        <Navigation navigationItems={this.props.navigationItems} />
      </header>
    );
  }
}

export default Header;
