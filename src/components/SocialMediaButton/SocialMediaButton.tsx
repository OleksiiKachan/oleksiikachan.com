import React, { Component } from 'react';
import classNames from 'classnames';
import './SocialMediaButton.scss';

/*
    <SocialMediaButton link='' resource='' />
*/
class SocialMediaButton extends Component<any, any> {
  render() {
    return (
      <a
        href={this.props.link}
        className={classNames(
          'smButton',
          `smButton_${this.props.resource}`,
          'fa',
          `fa-${this.props.resource}`
        )}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={classNames('smButton__text_hidden')}>
          {this.props.resource}
        </span>
      </a>
    );
  }
}

export default SocialMediaButton;
