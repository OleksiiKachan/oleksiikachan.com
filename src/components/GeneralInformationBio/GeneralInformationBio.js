import React, { Component } from 'react';
import classNames from 'classnames';
import './GeneralInformationBio.css';
import cv from '../../downloadables/oleksiikachan.pdf'

/*
    <GeneralInformationBio bio = '' className = ''/>
*/
class GeneralInformationBio extends Component {
    render() {
        return (
            <div className={classNames('biography', this.props.className)}>
                <h3 className={classNames('mainInformation__header')}>BIOGRAHPY</h3>
                <div className={classNames('biography__text')}>
                    {this.props.bio}
                </div>
                <div className={classNames('biography__downloadCV')}>
                    <a target='_blank' href={cv} className={classNames('biograpghy__downloadLink')}>Download CV <i className={classNames('biograpghy__downloadIcon', 'fa', 'fa-download')} aria-hidden="true"></i></a>
                </div>
            </div>
        );
    }
}

export default GeneralInformationBio;