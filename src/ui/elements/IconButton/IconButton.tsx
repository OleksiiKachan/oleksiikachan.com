import React, { Component } from 'react';
import classNames from 'classnames';
import './IconButton.scss';

/*
  <IconButton 
    icon=''
    altCaption=''
    onClick={() => void}
    className=''
  />
*/

type PropsType = {
  icon: string;
  altCaption: string;
  onClick: () => void;
  className?: string;
};

export default class IconButton extends Component<PropsType> {
  render() {
    return (
      <img
        src={this.props.icon}
        alt={this.props.altCaption}
        onClick={this.props.onClick}
        className={classNames('iconButton', this.props.className)}
      />
    );
  }
}
