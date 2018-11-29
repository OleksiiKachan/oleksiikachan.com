import React, { Component } from 'react';
import classNames from 'classnames';
import './ProjectDescription.scss';
import ToolIcon from '../ToolIcon';

/*
    <ProjectDescription project={} className=''/>
*/
class ProjectDescription extends Component {
  render() {
    const colors = ['red', 'blue', 'grey', 'green', 'yellow'];
    return (
      <div
        className={classNames(
          'projectDescription',
          `projectDescription_${
            colors[Math.floor(Math.random() * colors.length)]
          }`
        )}
      >
        <div className={classNames('projectDescription__header')}>
          <h3 className={classNames('projectDescription__title')}>
            {this.props.project.name}
          </h3>
          <p className={classNames('projectDescription__description')}>
            {this.props.project.description}
          </p>
        </div>
        <div className={classNames('projectDescription__footer')}>
          <ul className={classNames('projectDescription__toolsList')}>
            {this.props.project.tools.map(tool => {
              return (
                <li>
                  <ToolIcon
                    tool={tool}
                    className={classNames('projectDescription__toolIcon')}
                  />
                </li>
              );
            })}
          </ul>
          <div className={classNames('projectDescription__downloadFile')}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={this.props.project.url}
              className={classNames('projectDescription__downloadLink')}
            >
              {this.props.project.downloadText}{' '}
              <i
                className={classNames(
                  'projectDescription__downloadIcon',
                  `${
                    this.props.project.downloadText &&
                    this.props.project.downloadText !== 'Go to product site'
                      ? ''
                      : 'projectDescription__downloadIcon_hidden'
                  }`,
                  'fa',
                  'fa-download'
                )}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectDescription;
