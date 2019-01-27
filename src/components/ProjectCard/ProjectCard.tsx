import React, { Component } from 'react';
import classNames from 'classnames';
import './ProjectCard.scss';

/*
    <ProjectCard project={} className=''/>
*/
class ProjectCard extends Component<any, any> {
  render() {
    var cardBackground = {
      backgroundImage: `url(https://res.cloudinary.com/oleksiikachan/image/upload/v1543467854/portfolio/images/projects/${
        this.props.project.fileName
      }.png)`,
    };

    return (
      <div
        className={classNames('projectCard', this.props.className)}
        style={cardBackground}
      >
        <div className={classNames('projectCard__content')}>
          <div className={classNames('projectCard__titleSection')}>
            <h3 className={classNames('projectCard__title')}>
              {this.props.project.title}
            </h3>
          </div>
          <div className={classNames('projectCard__technologiesSection')}>
            <h4 className={classNames('projectCard__technologies')}>
              {this.props.project.displayTechnologies}
            </h4>
            <button className={classNames('projectCard__button')}>
              See More
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
