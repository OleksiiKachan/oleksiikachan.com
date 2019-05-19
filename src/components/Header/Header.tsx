import React, { Component } from 'react';
import classnames from 'classnames';
import { NavigationItemType } from '../../lib/types';
import Navigation from '../Navigation';
import './Header.scss';

/*
    <Header
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

export default class Header extends Component<PropsType> {
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
