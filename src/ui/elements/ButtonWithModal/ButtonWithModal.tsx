import React, { Component } from 'react';
import { EducationType, ExperienceType } from '../../../lib/types';
import { OutlineButton } from '..';
import TimelineModal from '../../pages/timeline/TimelineModal/TimelineModal';

type PropsType = {
  item?: EducationType | ExperienceType;
  type: string;
};

/*
  <ButtonWithModal
    item={}
    type=''
  />
*/

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
