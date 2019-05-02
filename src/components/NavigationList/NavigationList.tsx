import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

/*
    <NavigationList navigationItems=[] onLinkClick={}/>
*/
class NavigationList extends Component<any, any> {
  render() {
    return (
      <div className={classnames('navigation__listWrapper')}>
        <ul className={classnames('navigation__list')}>
          {this.props.navigationItems.map(
            (navigationItem: {
              key: string;
              sectionUrl: string;
              title: string;
              isSelected: boolean;
            }) => {
              return (
                <li
                  className={classnames(
                    'navigation__listItem',
                    navigationItem.isSelected && 'navigation__listItem_selected'
                  )}
                  key={navigationItem.key}
                >
                  <Link
                    to={navigationItem.sectionUrl}
                    onClick={() => {
                      this.props.onLinkClick(navigationItem.key);
                    }}
                    className={classnames('navigation__listLink')}
                  >
                    {navigationItem.title}
                  </Link>
                </li>
              );
            }
          )}
        </ul>
      </div>
    );
  }
}

export default NavigationList;
