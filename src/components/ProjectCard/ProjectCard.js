import React, { Component } from 'react';
import classNames from 'classnames';
import './ProjectCard.scss';
import ProjectDescription from '../ProjectDescription';

/*
    <ProjectCard project={} className=''/>
*/
class ProjectCard extends Component {
  render() {
    var cardBackground = {
      backgroundImage: `url(https://res.cloudinary.com/oleksiikachan/image/upload/v1543467854/portfolio/images/projects/${
        this.props.project.fileName
      }.png)`,
    };

    console.log(cardBackground);

    return (
      <div className={classNames('projectCard', this.props.className)}>
        <div className={classNames('projectCard__innerArea')}>
          <div
            className={classNames('projectCard__front')}
            style={cardBackground}
          >
            <div className={classNames('projectCard__shader')} />
          </div>
          <ProjectDescription project={this.props.project} className="" />
        </div>
      </div>
    );
  }
}

export default ProjectCard;
