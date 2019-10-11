import React, { Component, createRef, ReactNode } from 'react';
import classNames from 'classnames';
import './Modal.scss';
import { Portal, Overlay, IconButton } from '..';

const icon_close = require('../../assets/icons/icon_close.svg');

/*
    <Modal handleClose={() => void}>
      {children}
    </Modal>
*/

type PropsType = {
  handleClose: () => void;
  children: ReactNode;
};

export default class Modal extends Component<PropsType> {
  private modalRef = createRef<HTMLDivElement>();
  state = { show: false };

  componentDidMount() {
    document.addEventListener('mousedown', e => this.handleClickOutside(e));
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', e => this.handleClickOutside(e));
  }

  handleClickOutside(event: MouseEvent) {
    if (
      this.modalRef &&
      this.modalRef.current &&
      !this.modalRef.current.contains(event.target as Node)
    ) {
      this.props.handleClose();
    }
  }
  render() {
    return (
      <Portal>
        <Overlay>
          <section className="modal" ref={this.modalRef}>
            <IconButton
              src={icon_close}
              alt="close icon"
              onClick={this.props.handleClose}
              className={classNames('modal__closeButton')}
            />
            {this.props.children}
          </section>
        </Overlay>
      </Portal>
    );
  }
}
