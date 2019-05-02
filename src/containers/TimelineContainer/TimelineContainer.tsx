import React, { Component } from 'react';
import TimelineSection from '../../components/TimelineSection';

/*
    <TimelineContainer projects={} />
*/
export default class ProjectsContainer extends Component<any, any> {
  render() {
    const dataStore = require('../../data.json');
    return (
      <TimelineSection
        experience={dataStore.experience}
        education={dataStore.education}
      />
    );
  }
}
