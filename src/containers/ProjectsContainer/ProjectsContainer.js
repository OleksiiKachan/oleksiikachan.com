import React, { Component } from 'react';
import ProjectsSection from '../../components/ProjectsSection';

/*
    <ProjectsContainer projects={} />
*/
class ProjectsContainer extends Component {
  render() {
    return (
      <ProjectsSection
        projects={this.props.projects}
        className={this.props.className}
      />
    );
  }
}

export default ProjectsContainer;
