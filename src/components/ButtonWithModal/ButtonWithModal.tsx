import React, { Component } from 'react';
import OutlineButton from '../OutlineButton';
import TimelinePopup from '../TimelinePopup';
import { EducationType, ExperienceType } from '../../lib/types';

type PropsType = {
  item?: EducationType | ExperienceType;
  type: string;
};

export default class ButtonWithModal extends Component<PropsType> {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <>
        <TimelinePopup
          show={this.state.show}
          handleClose={this.hideModal}
          item={this.props.item}
          type={this.props.type}
          modalRootID="root"
        />
        <OutlineButton onClick={this.showModal}>See More</OutlineButton>
      </>
    );
  }
}
