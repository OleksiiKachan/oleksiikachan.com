import React, { Component } from 'react';
import classNames from 'classnames';
import './GeneralInformationHeader.scss';
import SocialMediaButtonPanel from '../SocialMediaButtonPanel';
import Avatar from '../../images/avatar.png';

/*
    <GeneralInformationHeader generalInformation = {} className='' />
*/
class GeneralInformationHeader extends Component {
  render() {
    return (
      <div
        className={classNames('generalInformationHeader', this.props.className)}
      >
        <div
          className={classNames('avatar', 'generalInformationHeader__avatar')}
        >
          <figure className={classNames('avatar__filter')}>
            <img
              alt="Oleksii Kachan"
              src={Avatar}
              className={classNames('avatar__image')}
            />
          </figure>
        </div>
        <div className={classNames('generalInformationHeader_side')}>
          <div
            className={classNames('generalInformationHeader__placeHolder')}
          />
          <div className={classNames('generalInformationHeader__head')}>
            <h1 className={classNames('generalInformationHeader__name')}>
              {this.props.generalInformation.name}
            </h1>
            <h2 className={classNames('generalInformationHeader__position')}>
              {this.props.generalInformation.title}
            </h2>
          </div>
          <SocialMediaButtonPanel
            resources={this.props.generalInformation.resources}
            className={classNames('generalInformationHeader__socialMedia')}
          />
        </div>
      </div>
    );
  }
}

export default GeneralInformationHeader;
