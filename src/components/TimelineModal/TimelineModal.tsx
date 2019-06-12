import React, { Component, createRef } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { EducationType, ExperienceType } from '../../lib/types';
import EducationPage from './EducationPage';
import ExperiencePage from './ExperiencePage';
import './TimelineModal.scss';

const icon_close = require('../../assets/icons/icon_close.svg');

/*
    <TimelineModal
      handleClose=() => void
      item={}
      type=''
      modalRootID=''
    />
*/

type PropsType = {
  handleClose: () => void;
  item?: EducationType | ExperienceType;
  type: string;
  modalRootID: string;
};

export default class TimelineModal extends Component<PropsType> {
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
    const portalContent = [
      <div className={classNames('modal')}>
        <section className="modal-main" ref={this.modalRef}>
          <img
            src={icon_close}
            alt="close icon"
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
