import React, { Component } from 'react';
import ProjectDetails from '../../components/ProjectDetails';

/*
    <ProjectDetailsContainer project={} className='' />
*/
class ProjectDetailsContainer extends Component<any, any> {
  render() {
    return (
      <ProjectDetails
        project={this.props.project}
        className={this.props.className}
      />
    );
  }
}

export default ProjectDetailsContainer;
