import React, { Component } from 'react';
import ProjectsSection from './ProjectsSection/ProjectsSection';

/*
    <ProjectsContainer />
*/

export default class ProjectsContainer extends Component<{}> {
  render() {
    const dataStore = require('../../../data.json');
    return <ProjectsSection projects={dataStore.projects} />;
  }
}
