import React, { Component } from 'react';
import classnames from 'classnames';
import { NavigationItemType } from '../../../lib/types';
import NavigationLogo from './NavigationLogo/NavigationLogo';
import MenuIconToggle from './MenuIconToggle/MenuIconToggle';
import NavigationList from './NavigationList/NavigationList';
import './Navigation.scss';

/*
    <Navigation
      navigationItems=[]
      onLinkClick=() => {}
      className=''
    />
*/

type PropsType = {
  navigationItems: Array<NavigationItemType>;
  onLinkClick: (selectedItemKey: string) => void;
  className?: string;
};

export default class Navigation extends Component<PropsType> {
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
