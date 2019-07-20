import React from 'react';
import classNames from 'classnames';
import { ProjectType } from '../../../../lib/types';
import ProjectCard from './ProjectCard/ProjectCard';
import './ProjectsSection.scss';

/*
    <ProjectsSection
      projects={} 
      className=''
    />
*/

type PropsType = {
  projects: Array<ProjectType>;
  className?: string;
};

export default ({ projects, className }: PropsType) => {
  return (
    <div id="portfolio" className={classNames('projectsSection', className)}>
      <h2 className={classNames('projectsSection__header')}>Projects</h2>
      <div className={classNames('projectsSection__content')}>
        {projects.map((project: ProjectType) => {
          return (
            <ProjectCard
              key={projects.indexOf(project)}
              id={project.id}
              title={project.title}
              stack={project.shortStack}
              cardImage={project.cardImage}
              description={project.shortDescription}
              settings={project.settings}
            />
          );
        })}
      </div>
    </div>
  );
};
