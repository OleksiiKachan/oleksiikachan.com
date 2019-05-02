import React, { Component } from 'react';
import classnames from 'classnames';

/*
    <NavigationLogo />
*/
class NavigationLogo extends Component<any, any> {
  render() {
    return (
      <div className={classnames('navigation__logoWrapper')}>
        <img
          alt="Oleksii Kachan logo"
          className={classnames('navigation__logoImage')}
          src="https://res.cloudinary.com/oleksiikachan/image/upload/v1546142703/portfolio/images/logo/logo_horizontal_dark.svg"
        />
      </div>
    );
  }
}

export default NavigationLogo;
