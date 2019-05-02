import React, { Component } from 'react';
import ProjectsSection from '../../components/ProjectsSection';

/*
    <ProjectsContainer projects={} />
*/
class ProjectsContainer extends Component<any, any> {
  render() {
    const dataStore = require('../../data.json');
    return <ProjectsSection projects={dataStore.projects} />;
  }
}

export default ProjectsContainer;
