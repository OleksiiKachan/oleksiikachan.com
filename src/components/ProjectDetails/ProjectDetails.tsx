import React, { Component } from 'react';
import classNames from 'classnames';
import './ProjectDetails.scss';
import ImageCarousel from '../ImageCarousel';
/*
    <ProjectDetails project={} className=''/>
*/
class ProjectDetails extends Component<any, any> {
  render() {
    return (
      <div className={classNames('projectDetails', this.props.className)}>
        <div className={classNames('projectDetails__slider')}>
          <ImageCarousel items={this.props.project.images} />
        </div>
        <div className={classNames('projectDetails__title')}>
          <h1 className={classNames('projectDetails__projectTitle')}>
            {this.props.project.title}
          </h1>
          <span className={classNames('projectDetails__separator')} />
          <div className={classNames('projectDetails__clientSection')}>
            <p className={classNames('projectDetails__clientType')}>
              {this.props.project.clientType}
            </p>
            <h2 className={classNames('projectDetails__client')}>
              {this.props.project.client}
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectDetails;
