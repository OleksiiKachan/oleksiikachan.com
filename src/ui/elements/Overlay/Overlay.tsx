import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import './Overlay.scss';

/*
    <Overlay></Overlay>
*/

type PropsType = {
  children: ReactNode;
};

export default class Overlay extends Component<PropsType> {
  render() {
    return <div className={classNames('overlay')}>{this.props.children}</div>;
  }
}
