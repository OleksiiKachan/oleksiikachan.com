import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import './TimelineModal.scss';
import { EducationType, ExperienceType } from '../../lib/types';
import EducationPage from './EducationPage';
import ExperiencePage from './ExperiencePage';

const icon_close = require('../../assets/icons/icon_close.svg');

/*
    <TimelineModal experience=[] education=[]/>
*/

type PropsType = {
  handleClose: () => void;
  item?: EducationType | ExperienceType;
  type: string;
  modalRootID: string;
};

export default class TimelineModal extends Component<PropsType> {
  render() {
    const portalContent = [
      <div className={classNames('modal')}>
        <section className="modal-main">
          <img
            src={icon_close}
            onClick={this.props.handleClose}
            className={classNames('modal-closeButton')}
          />
          {this.props.type === 'education' ? (
            <EducationPage item={this.props.item as EducationType} />
          ) : (
            <ExperiencePage item={this.props.item as ExperienceType} />
          )}
        </section>
      </div>,
    ];

    const portalRoot = document.getElementById(this.props.modalRootID);
    const portal = portalRoot
      ? [ReactDOM.createPortal(portalContent, portalRoot)]
      : portalContent;

    return [...portal];
  }
}
