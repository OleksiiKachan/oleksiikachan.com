import React, { Component } from 'react';
import classNames from 'classnames';
import './GeneralInformationBio.scss';
import BiographyText from '../BiographyText';

/*
    <GeneralInformationBio bio = '' className = ''/>
*/
class GeneralInformationBio extends Component<any, any> {
  render() {
    return (
      <div className={classNames('biography', this.props.className)}>
        <h3 className={classNames('mainInformation__header')}>BIOGRAPHY</h3>
        <BiographyText
          bio={this.props.bio}
          className={classNames('biography__text')}
        />
        <div className={classNames('biography__downloadCV')}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://res.cloudinary.com/oleksiikachan/image/upload/v1543469418/portfolio/downloadables/oleksiikachan.pdf"
            className={classNames('biograpghy__downloadLink')}
          >
            Download CV{' '}
            <i
              className={classNames(
                'biograpghy__downloadIcon',
                'fa',
                'fa-download'
              )}
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default GeneralInformationBio;
