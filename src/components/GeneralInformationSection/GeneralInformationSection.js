import React, { Component } from 'react';
import classNames from 'classnames';
import './GeneralInformationSection.scss';
import GeneralInformationHeader from '../GeneralInformationHeader';
import GeneralInformationBio from '../GeneralInformationBio';
import PersonalInformation from '../PersonalInformation';

/*
    <GeneralInformationSection generalInformation={} className=''/>
*/
class GeneralInformationSection extends Component {
  render() {
    return (
      <div
        id="about"
        className={classNames('generalInformation', this.props.className)}
      >
        <GeneralInformationHeader
          generalInformation={this.props.generalInformation}
          className={classNames('generalInformation_header')}
        />
        <div
          className={classNames(
            'mainInformation',
            'generalInformation__mainInformation'
          )}
        >
          <PersonalInformation
            information={this.props.generalInformation}
            className={classNames('generalInformation__personalInformation')}
          />
          <GeneralInformationBio
            bio={this.props.generalInformation.bio}
            className={classNames('generalInformation__bio')}
          />
        </div>
      </div>
    );
  }
}

export default GeneralInformationSection;
