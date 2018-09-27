import React, { Component } from 'react';
import classNames from 'classnames';
import './ProjectsSection.css';
import ProjectCard from '../ProjectCard';

/*
    <ProjectsSection projects={} projectFilterMethod={}/>
*/
class ProjectsSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            previousProjectType: 'all',
            projectType: 'all',
            projects: this.props.projects
        };
    }    

    setProjectType = (newProjectType) => {
        this.setClickedFilterButton(newProjectType);
        this.setState({
            previousProjectType: this.state.projectType,
            projectType: newProjectType,
            projects: this.filterProjects(newProjectType)
        });
    } 

    filterProjects = (projectType) => {
        return projectType === 'all' ? this.props.projects : this.props.projects.filter((project) => { return project.projectType === projectType})

    }

    componentDidUpdate = () => {
        this.setClickedFilterButton();
    }

    setClickedFilterButton = () => {
        const oldClickedButton = document.getElementById(`projectsFilterButton_${this.state.previousProjectType}`);
        oldClickedButton.parentElement.classList.remove('projectsSection__projectsFilterItem_clicked');
        const newClickedButton = document.getElementById(`projectsFilterButton_${this.state.projectType}`);
        newClickedButton.parentElement.classList.add('projectsSection__projectsFilterItem_clicked');
    }

    render() {
        return (
            <div id='portfolio' className={classNames('projectsSection', this.props.className)}>
                <h2 className={classNames('projectsSection__header')}>Portfolio</h2>
                <ul className={classNames('projectsSection__projectsFilter')}>
                    <li className={classNames('projectsSection__projectsFilterItem', 'projectsSection__projectsFilterItem_clicked')}>
                        <button id='projectsFilterButton_all' onClick={() => this.setProjectType('all')} className={classNames('projectsSection__projectsFilterButton')}>All Projects</button>
                    </li>
                    <li className={classNames('projectsSection__projectsFilterItem')}>
                        <button id='projectsFilterButton_development' onClick={() => this.setProjectType('development')} className={classNames('projectsSection__projectsFilterButton')}>Development</button>
                    </li>
                    <li className={classNames('projectsSection__projectsFilterItem')}>
                        <button id='projectsFilterButton_design' onClick={() => this.setProjectType('design')} className={classNames('projectsSection__projectsFilterButton')}>Design</button>
                    </li>
                </ul>
                <div className={classNames('projectsSection__content')}>
                {
                    this.state.projects.map(project => {
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