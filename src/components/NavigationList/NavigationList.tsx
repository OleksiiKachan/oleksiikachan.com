import React, { Component } from 'react';
import classnames from 'classnames';

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
              sectionId: string;
              title: string;
            }) => {
              return (
                <li
                  className={classnames('navigation__listItem')}
                  key={navigationItem.key}
                >
                  <a
                    onClick={this.props.onLinkClick}
                    href={navigationItem.sectionId}
                    className={classnames('navigation__listLink')}
                  >
                    {navigationItem.title}
                  </a>
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
