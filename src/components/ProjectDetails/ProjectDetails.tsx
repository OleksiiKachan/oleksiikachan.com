import React from 'react';
import classNames from 'classnames';
import { ProjectType } from '../../lib/types';
import './ProjectDetails.scss';
import UrlListField from './UrlListField';
import ValueListField from './ValueListField';

/*
    <ProjectDetails
      project={}
      className=''
    />
*/

type PropsType = {
  project: ProjectType;
  className?: string;
};

export default ({ project, className }: PropsType) => {
  return (
    <div className={classNames('projectDetails', className)}>
      <h2 className={classNames('projectDetails__title')}>{project.title}</h2>
      {project.teamSize && (
        <div className={classNames('projectDetails__teamSize')}>
          Team size: {project.teamSize}
        </div>
      )}
      {project.partner && (
        <UrlListField
          fieldLabel={`Partner${project.partner.length > 1 ? 's' : ''}`}
          list={project.partner}
          className={classNames('projectDetails__listField')}
        />
      )}
      {project.client && (
        <UrlListField
          fieldLabel={`Client${project.client.length > 1 ? 's' : ''}`}
          list={project.client}
          className={classNames('projectDetails__listField')}
        />
      )}
      <div className={classNames('projectDetails__description')}>
        {project.projectDescription}
      </div>
      <ValueListField
        fieldLabel="Technologies"
        list={project.longStack}
        className={classNames('projectDetails__listField')}
      />
    </div>
  );
};
