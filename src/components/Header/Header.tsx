import React, { Component } from 'react';
import classNames from 'classnames';
import './Header.scss';
import HeadMenu from '../HeadMenu';

/*
    <Header name='' title=''/>
*/
class Header extends Component<any, any> {
  render() {
    return (
      <header
        id="header"
        className={classNames('header', this.props.className)}
      >
        <div className={classNames('header__headCover', 'headCover')}>
          <div className={classNames('headCover_filter')}>
            <img
              src="https://res.cloudinary.com/oleksiikachan/image/upload/v1546142703/portfolio/images/logo/logo_horizontal_light.svg"
              className={classNames('headCover__logo')}
            />
            <div className={classNames('headCover__titleWrapper')}>
              <h1 className={classNames('headCover__title')}>
                {this.props.title}
              </h1>
              <a href="#portfolio" className={classNames('headCover__link')}>
                Go to portfolio
              </a>
            </div>
          </div>
        </div>
        <HeadMenu className={classNames('header__menu')} />
      </header>
    );
  }
}

export default Header;
