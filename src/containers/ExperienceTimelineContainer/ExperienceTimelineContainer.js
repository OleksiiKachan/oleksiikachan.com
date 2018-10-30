import React, { Component } from 'react';
import ExperienceTimelineSection from '../../components/ExperienceTimelineSection';

/*
    <ExperienceTimelineContainer timeline={} />
*/
class ExperienceTimelineContainer extends Component {
  render() {
    return (
      <ExperienceTimelineSection
        timeline={this.props.timeline}
        className={this.props.className}
      />
    );
  }
}

export default ExperienceTimelineContainer;
