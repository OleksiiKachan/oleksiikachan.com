import React, { Component } from 'react';
import classNames from 'classnames';
import './SkillsSection.css';
import LanguagesPanel from '../LanguagesPanel/LanguagesPanel.js';
import SkillsPanel from '../SkillsPanel/SkillsPanel.js';

/*
    <SkillsSection skills={} languages={}/>
*/
class SkillsSection extends Component {
    render() {
        return (
            <div id='competencies' className={classNames('skillsSection', this.props.className)}>
                <h2 className={classNames('skillsSection__header')}>Core Competencies</h2>
                <div className={classNames('skillsSection__content')}>
                    <SkillsPanel skills={this.props.skills} className={classNames('skillsContent__skills')} />
                    <LanguagesPanel languages={this.props.languages} className={classNames('skillsContent__languages')} />
                </div>
            </div>
        );
    }
}

export default SkillsSection;