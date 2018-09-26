import React, { Component } from 'react';
import classNames from 'classnames';
import './ProjectsSection.css';
import ProjectCard from '../ProjectCard/ProjectCard.js';

/*
    <ProjectsSection projects={}/>
*/
class ProjectsSection extends Component {
    render() {
        return (
            <div id='portfolio' className={classNames('projectsSection')}>
                <h2 className={classNames('projectsSection__header')}>Portfolio</h2>
                <div className={classNames('projectsSection__content')}>
                {
                    this.props.projects.map(project => {
                        return(
                            <ProjectCard project={project}/>
                        );
                    })
                }
                </div>
            </div>
        );
    }
}

export default ProjectsSection;