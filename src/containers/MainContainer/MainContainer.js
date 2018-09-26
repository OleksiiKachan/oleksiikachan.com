import React, { Component } from 'react';
import classNames from 'classnames';
import './MainContainer.css';
import GeneralInformationContainer from '../GeneralInformationContainer/GeneralInformationContainer.js';
import HeaderContainer from '../HeaderContainer/HeaderContainer.js';
import SkillsContainer from '../SkillsContainer/SkillsContainer.js';
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer.js';
import ExperienceTimelineContainer from '../ExperienceTimelineContainer/ExperienceTimelineContainer.js';

/*
    <MainContainer generalInformation={} />
*/
class MainContainer extends Component {
    render() {
        return (
            <div>
                <HeaderContainer 
                    name={this.props.generalInformation.name}
                    title={this.props.generalInformation.title}
                    className={classNames('section')}
                />
                <GeneralInformationContainer 
                    generalInformation={this.props.generalInformation}
                    className={classNames('section')}
                    />
                <ProjectsContainer 
                    projects={this.props.generalInformation.projects}
                    className={classNames('section')}
                />
                <SkillsContainer 
                    skills={this.props.generalInformation.skills}
                    languages={this.props.generalInformation.languages}
                    className={classNames('section')}
                />
                <ExperienceTimelineContainer 
                    timeline={this.props.generalInformation.timeline}
                    className={classNames('section')}
                />
            </div>
        );
    }
}

export default MainContainer;