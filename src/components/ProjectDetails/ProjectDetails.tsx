import React from 'react';
import classNames from 'classnames';
import { ProjectType } from '../../lib/types';
import './ProjectDetails.scss';
import UrlListField from './UrlListField';
import ValueListField from './ValueListField';
import ParagraphField from './ParagraphField';
import ImageField from './ImageField';
import ProjectsNavigation from './ProjectsNavigation';

/*
    <ProjectDetails
      project={}
      className=''
    />
*/

type PropsType = {
  project: ProjectType;
  previousProject?: { id: string; name: string };
  nextProject?: { id: string; name: string };
  className?: string;
};

export default ({
  project,
  previousProject,
  nextProject,
  className,
}: PropsType) => {
  const projectDescription = project.projectDescription.map(item => {
    switch (item.type) {
      case 'list':
        if (item.list) {
          const list = item.list.map(listItem => {
            return listItem
              .split('|bold|')
              .join(`<span class='${classNames('paragraphValue_bold')}'>`)
              .split('|italic|')
              .join(`<span class='${classNames('paragraphValue_italic')}'>`)
              .split('|-|')
              .join('</span>');
          });
          return { ...item, list };
        }
        break;
      default:
        if (item.content) {
          const content = item.content
            .split('|bold|')
            .join(`<span class='${classNames('paragraphValue_bold')}'>`)
            .split('|italic|')
            .join(`<span class='${classNames('paragraphValue_italic')}'>`)
            .split('|-|')
            .join('</span>');
          return { ...item, content: content };
        } else {
          return item;
        }
    }

    return item;
  });

  return (
    <div className={classNames('projectDetails', className)}>
      <ProjectsNavigation />
      <ImageField
        image={project.coverImage || project.cardImage}
        className={classNames('projectDetails__images')}
      />
      <div className={classNames('projectDetails__content')}>
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
        <ParagraphField
          content={projectDescription}
          className={classNames('projectDetails__paragraphField')}
        />
        <ValueListField
          fieldLabel="Technologies"
          list={project.longStack}
          className={classNames(
            'projectDetails__listField',
            'projectDetails__listField_isolated'
          )}
        />
        {project.externalResources && (
          <UrlListField
            fieldLabel="External Resources"
            list={project.externalResources}
            alignment="column"
            className={classNames(
              'projectDetails__listField',
              'projectDetails__listField_isolated'
            )}
          />
        )}
      </div>
    </div>
  );
};
