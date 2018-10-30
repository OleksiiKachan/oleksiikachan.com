import React, { Component } from 'react';
import classNames from 'classnames';
import './ProjectDescription.scss';
import ToolIcon from '../ToolIcon';
import branding_oleksiiKachan from '../../downloadables/projects/branding_oleksiiKachan.pdf';
import branding_irynaKachan from '../../downloadables/projects/branding_irynaKachan.pdf';
import branding_oleksandrGorchakov from '../../downloadables/projects/branding_oleksandrGorchakov.pdf';
import hyperloop from '../../downloadables/projects/hyperloop.pdf';

/*
    <ProjectDescription project={} className=''/>
*/
class ProjectDescription extends Component {
  getDownloadableFile = fileName => {
    switch (fileName) {
      case 'branding_oleksiiKachan':
        return branding_oleksiiKachan;
      case 'branding_irynaKachan':
        return branding_irynaKachan;
      case 'branding_oleksandrGorchakov':
        return branding_oleksandrGorchakov;
      case 'hyperloop':
        return hyperloop;
      case 'agw':
        return 'http://olsom.net/agw-mes/';
      case 'tdm':
        return 'http://www.catalystsi.com/index.php?option=com_content&view=article&id=8&Itemid=12';
      default:
        return '';
    }
  };

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
              href={this.getDownloadableFile(this.props.project.fileName)}
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
