import React, { Component } from 'react';
import TimelineSection from './TimelineSection/TimelineSection';

/*
    <TimelineContainer />
*/

export default class ProjectsContainer extends Component<{}> {
  render() {
    const dataStore = require('../../../data.json');
    return (
      <TimelineSection
        experience={dataStore.experience}
        education={dataStore.education}
      />
    );
  }
}
