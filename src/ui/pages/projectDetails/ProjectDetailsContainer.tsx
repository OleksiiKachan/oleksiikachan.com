import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import { ProjectType } from '../../../lib/types';
import ProjectDetails from './ProjectDetails/ProjectDetails';

/*
    <ProjectDetailsContainer />
*/

type PropsType = RouteComponentProps<{ projectId: string }>;

type StateType = {
  project: ProjectType;
};

export default class ProjectDetailsContainer extends Component<
  PropsType,
  StateType
> {
  componentWillMount() {
    const dataStore = require('../../../data.json');
    const project = dataStore.projects.find(
      (item: { id: string }) => item.id === this.props.match.params.projectId
    );
    this.setState({
      project,
    });
  }

  render() {
    return this.state.project ? (
      <ProjectDetails project={this.state.project} />
    ) : (
      <div>Loading...</div>
    );
  }
}
