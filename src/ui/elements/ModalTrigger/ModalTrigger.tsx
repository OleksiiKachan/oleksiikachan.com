import React, { Component, ReactElement, ReactNode } from 'react';
import { Modal } from '..';

type PropsType = { trigger: ReactElement; children: ReactNode };

/*
  <ButtonWithModal
    item={}
    type=''
  />
*/

export default class ModalTrigger extends Component<PropsType> {
  state = { show: false };

  showModal = (ev: MouseEvent) => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <>
        {React.cloneElement(this.props.trigger, { onClick: this.showModal })}

        {this.state.show && (
          <Modal handleClose={this.hideModal}>{this.props.children}</Modal>
        )}
      </>
    );
  }
}
