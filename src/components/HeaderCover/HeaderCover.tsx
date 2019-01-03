import React, { Component } from 'react';
import classnames from 'classnames';
import './HeaderCover.scss';

/*
    <HeaderCover name='' title=''/>
*/
class HeaderCover extends Component<any, any> {
  render() {
    return (
      <section className={classnames('header__headCover', 'headCover')}>
        <div className={classnames('headCover_filter')}>
          <img
            src="https://res.cloudinary.com/oleksiikachan/image/upload/v1546142703/portfolio/images/logo/logo_horizontal_light.svg"
            className={classnames('headCover__logo')}
            alt="Oleksii Kachan monographic logo"
          />
          <div className={classnames('headCover__titleWrapper')}>
            <h1 className={classnames('headCover__title')}>
              {this.props.title}
            </h1>
            <a href="#portfolio" className={classnames('headCover__link')}>
              Go to portfolio
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default HeaderCover;
