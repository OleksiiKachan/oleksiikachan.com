import React, { Component } from 'react';
import OutlineButton from '../OutlineButton';
import TimelineModal from '../TimelineModal';
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
        <OutlineButton onClick={this.showModal} type="dark">
          See More
        </OutlineButton>
        {this.state.show && (
          <TimelineModal
            handleClose={this.hideModal}
            item={this.props.item}
            type={this.props.type}
            modalRootID="root"
          />
        )}
      </>
    );
  }
}
