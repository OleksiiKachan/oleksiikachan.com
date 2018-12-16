import React, { Component } from 'react';
import SkillsSection from '../../components/SkillsSection';

/*
    <SkillsContainer skills={} languages={}/>
*/
class SkillsContainer extends Component<any, any> {
  render() {
    return (
      <SkillsSection
        skills={this.props.skills}
        languages={this.props.languages}
        className={this.props.className}
      />
    );
  }
}

export default SkillsContainer;
