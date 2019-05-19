import React, { Component } from 'react';
import classNames from 'classnames';
import './MainContainer.scss';
// import GeneralInformationContainer from '../GeneralInformationContainer';
// import HeaderContainer from '../HeaderContainer';
// import SkillsContainer from '../SkillsContainer';
// import ProjectsContainer from '../ProjectsContainer';
import TimelineSection from '../../components/TimelineSection';
import ProjectSection from '../../components/ProjectsSection';
// import ContactContainer from '../ContactContainer';
// import FooterContainer from '../FooterContainer';
// import BackToTopButton from '../BackToTopButton';

/*
    <MainContainer generalInformation={} />
*/
class MainContainer extends Component<any, any> {
  render() {
    return (
      <div className={'mainContainer'}>
        <ProjectSection
          projects={this.props.generalInformation.projects}
          className={classNames('section')}
        />
        <TimelineSection
          experience={this.props.generalInformation.experience}
          education={this.props.generalInformation.education}
          className={classNames('section')}
        />
        {/* <HeaderContainer
          name={this.props.generalInformation.name}
          title={this.props.generalInformation.title}
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
        <ContactContainer
          contacts={this.props.generalInformation.contacts}
          className={classNames('section')}
        />
        <FooterContainer resources={this.props.generalInformation.resources} />
        <BackToTopButton topId="#header" /> */}
      </div>
    );
  }
}

export default MainContainer;
