import React, { Component } from 'react';
import classnames from 'classnames';
import './Navigation.scss';
import NavigationLogo from '../NavigationLogo';
import MenuIconToggle from '../MenuIconToggle';
import NavigationList from '../NavigationList';

/*
    <Navigation navigationItems=[]/>
*/
class Navigation extends Component<any, any> {
  render() {
    var onClick = () => {
      (document.getElementById(
        'navigation__input'
      )! as HTMLInputElement).checked = false;
    };

    return (
      <nav className={classnames('header__navigation', 'navigation')}>
        <NavigationLogo />
        <MenuIconToggle />
        <NavigationList
          onLinkClick={onClick}
          navigationItems={this.props.navigationItems}
        />
      </nav>
    );
  }
}

export default Navigation;
