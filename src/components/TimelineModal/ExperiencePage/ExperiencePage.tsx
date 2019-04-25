import React from 'react';
import classNames from 'classnames';
import './ExperiencePage.scss';
import { ExperienceType } from '../../../lib/types';

/*
    <ExperiencePage item={}>
*/

type PropsType = {
  item: ExperienceType;
};

export default ({ item }: PropsType) => {
  return (
    <div className={classNames('experiencePage')}>
      <div className={classNames('experiencePage__header')}>
        {item.position}
      </div>
      <div className={classNames('experiencePage__subheader')}>
        <div className={classNames('experiencePage__label')}>Company:</div>
        <div className={classNames('experiencePage__value')}>
          {item.companyTitle}
        </div>
      </div>
      <div className={classNames('experiencePage__field')}>
        <div className={classNames('experiencePage__label')}>Dates:</div>
        <div className={classNames('experiencePage__value')}>{item.dates}</div>
      </div>
      <div
        className={classNames(
          'experiencePage__field',
          'experiencePage__field_list'
        )}
      >
        <div
          className={classNames(
            'experiencePage__label',
            'experiencePage__label_list'
          )}
        >
          Responsibilities:
        </div>
        <div
          className={classNames(
            'experiencePage__value',
            'experiencePage__value_list'
          )}
        >
          <ul>
            {item.responsibilities.map(responsibility => {
              return (
                <li key={item.responsibilities.indexOf(responsibility)}>
                  {responsibility}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {item.projects && (
        <div
          className={classNames(
            'experiencePage__field',
            'experiencePage__field_list'
          )}
        >
          <div
            className={classNames(
              'experiencePage__label',
              'experiencePage__label_list'
            )}
          >
            Projects:
          </div>
          <div
            className={classNames(
              'experiencePage__value',
              'experiencePage__value_list'
            )}
          >
            <ul>
              {item.projects.map(project => {
                return (
                  <li key={project.id}>
                    <a
                      target="_blank"
                      className={classNames('experiencePage__link')}
                      href={`https://oleksiikachan.com/projects/${project.id}`}
                    >
                      {project.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
