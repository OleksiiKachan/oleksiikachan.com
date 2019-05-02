import React, { Component } from 'react';
import classnames from 'classnames';
import './Navigation.scss';
import NavigationLogo from '../NavigationLogo';
import MenuIconToggle from '../MenuIconToggle';
import NavigationList from '../NavigationList';

/*
    <Navigation navigationItems=[]/>
*/

type PropsType = {
  navigationItems: Array<{
    key: string;
    title: string;
    sectionUrl: string;
    isSelected: boolean;
  }>;
  onLinkClick: (selectedItemKey: string) => void;
  className?: string;
};

class Navigation extends Component<PropsType> {
  render() {
    return (
      <nav className={classnames('header__navigation', 'navigation')}>
        <NavigationLogo />
        <MenuIconToggle />
        <NavigationList
          onLinkClick={this.props.onLinkClick}
          navigationItems={this.props.navigationItems}
        />
      </nav>
    );
  }
}

export default Navigation;
