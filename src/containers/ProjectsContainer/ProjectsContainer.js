import React, { Component } from 'react';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection.js'

/*
    <ProjectsContainer projects={} />
*/
class ProjectsContainer extends Component {
    render() {
        return (
            <ProjectsSection projects={this.props.projects}/>
        );
    }
}

export default ProjectsContainer;