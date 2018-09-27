import React, { Component } from 'react';
import classNames from 'classnames';
import './ProjectCard.css';
import ProjectDescription from '../ProjectDescription';

/*
    <ProjectCard project={} className=''/>
*/
class ProjectCard extends Component {
    render() {
        return (
            <div className={classNames('projectCard', this.props.className)}>
                <div className={classNames('projectCard__innerArea')}>
                    <div className={classNames('projectCard__front', `projectCard_${this.props.project.fileName}`)}>
                        <div className={classNames('projectCard__shader')}>
                        </div>
                    </div>
                    <ProjectDescription project={this.props.project} className=''/>
                </div>
            </div>
        );
    }
}

export default ProjectCard;