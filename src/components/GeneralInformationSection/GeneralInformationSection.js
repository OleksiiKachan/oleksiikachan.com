import React, { Component } from 'react';
import classNames from 'classnames';
import './GeneralInformationSection.css';
import GeneralInformationHeader from '../GeneralInformationHeader/GeneralInformationHeader'
import GeneralInformationBio from '../GeneralInformationBio/GeneralInformationBio'
import PersonalInformation from '../PersonalInformation/PersonalInformation'

/*
    <GeneralInformationSection generalInformation = {}/>
*/
class GeneralInformationSection extends Component {
    render() {
        return (
            <div className={classNames('generalInformation')}>
                <GeneralInformationHeader generalInformation = {this.props.generalInformation} className={classNames('generalInformation_header')}/>
                <div className={classNames('mainInformation', 'generalInformation__mainInformation')}>
                    <PersonalInformation information={this.props.generalInformation} className={classNames('generalInformation__personalInformation')}/>
                    <GeneralInformationBio bio={this.props.generalInformation.bio} className={classNames('generalInformation__bio')}/>
                </div>
            </div>
        );
    }
}

export default GeneralInformationSection;