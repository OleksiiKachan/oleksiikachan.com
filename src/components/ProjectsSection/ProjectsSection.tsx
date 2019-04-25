import React, { Component } from 'react';
import classNames from 'classnames';
import './ProjectsSection.scss';
import ProjectCard from './ProjectCard';
import ProjectsFilter from './ProjectsFilter/ProjectsFilter';
import { ProjectType } from '../../lib/types';

/*
    <ProjectsSection projects={} projectFilterMethod={}/>
*/

type PropsType = {
  projects: Array<ProjectType>;
  className?: string;
};

type StateType = {
  previousProjectType: string;
  projectType: string;
  projects: Array<ProjectType>;
};

class ProjectsSection extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);

    this.state = {
      previousProjectType: 'all',
      projectType: 'all',
      projects: this.props.projects,
    };

    this.setProjectType = this.setProjectType.bind(this);
  }

  setProjectType = (newProjectType: string) => {
    this.setClickedFilterButton();
    this.setState({
      previousProjectType: this.state.projectType,
      projectType: newProjectType,
      projects: this.filterProjects(newProjectType),
    });
  };

  filterProjects = (projectType: string) => {
    return projectType === 'all'
      ? this.props.projects
      : this.props.projects.filter((project: { projectType: string }) => {
          return project.projectType === projectType;
        });
  };

  componentDidUpdate = () => {
    this.setClickedFilterButton();
  };

  setClickedFilterButton = () => {
    const oldClickedButton = document.getElementById(
      `projectsFilterButton_${this.state.previousProjectType}`
    );
    oldClickedButton!.parentElement!.classList.remove(
      'projectsSection__projectsFilterItem_clicked'
    );
    const newClickedButton = document.getElementById(
      `projectsFilterButton_${this.state.projectType}`
    );
    newClickedButton!.parentElement!.classList.add(
      'projectsSection__projectsFilterItem_clicked'
    );
  };

  render() {
    return (
      <div
        id="portfolio"
        className={classNames('projectsSection', this.props.className)}
      >
        <h2 className={classNames('projectsSection__header')}>Projects</h2>

        <ProjectsFilter
          activeType={this.state.projectType}
          onClick={this.setProjectType}
        />
        <div className={classNames('projectsSection__content')}>
          {this.state.projects.map((project: ProjectType) => {
            return (
              <ProjectCard
                title={project.title}
                stack={project.shortStack}
                coverImage={project.coverImage}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProjectsSection;
