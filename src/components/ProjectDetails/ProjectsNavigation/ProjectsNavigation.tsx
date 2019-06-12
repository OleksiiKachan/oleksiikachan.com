import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './ProjectsNavigation.scss';

const icon_arrowBack = require('../../../assets/icons/icon_arrowBack-link.svg');

/*
    <ProjectsNavigation
      className=''
    />
*/

type PropsType = {
  className?: string;
};

export default ({ className }: PropsType) => {
  return (
    <div className={classNames('projectsNavigation', className)}>
      <div className={classNames('projectsNavigation__row')}>
        <Link
          to="/projects"
          className={classNames(
            'projectsNavigation__link',
            'projectsNavigation__link_align-left'
          )}
        >
          <img
            src={icon_arrowBack}
            alt="Left looking arrow"
            className={classNames('projectsNavigation__linkArrow')}
          />
          <span className={classNames('projectsNavigation__linkCaption')}>
            Back to Projects List
          </span>
        </Link>
      </div>
    </div>
  );
};
