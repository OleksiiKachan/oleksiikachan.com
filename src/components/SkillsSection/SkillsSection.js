import React, { Component } from 'react';
import classNames from 'classnames';
import './SkillsSection.css';
import FilledCircle from './filledCircle.svg';
import BlankCircle from './blankCircle.svg';
import CheckIcon from './checkmark.png';

/*
    <SkillsSection skills={} languages={}/>
*/
class SkillsSection extends Component {
    createLanguageRate = (rate) => {
        let visualRate = []
        rate = rate > 5 ? 5 : rate;

        for (let i = 0; i < rate; i++) {
            visualRate.push(<img src={FilledCircle} alt='Filled blue circle.' className={classNames('circleRate')}/>)
        }

        for (let i = 0; i < 5-rate; i++) {
            visualRate.push(<img src={BlankCircle} alt='Blank blue circle.'  className={classNames('circleRate')}/>)
        }

        return visualRate;
    }

    render() {
        return (
            <div className={classNames('skillsSection')}>
                <h2 className={classNames('skillsSection__header')}>My Skills</h2>
                <div className={classNames('skillsSection__content')}>
                    <div className={classNames('skillsContent__skills')}>
                        <ul className={classNames('skillsList')}>
                        {
                            this.props.skills.skillSet1.map(skill => {
                                return(
                                    <li className={classNames('skillList__item')}>
                                        <img src={CheckIcon} alt='Checkmark'className={classNames('skillList__checkmark')} />
                                        {skill}
                                    </li>
                                );
                            })
                        }
                        </ul>
                        <ul className={classNames('skillsList')}>
                        {
                            this.props.skills.skillSet2.map(skill => {
                                return(
                                    <li className={classNames('skillList__item')}>
                                        <img src={CheckIcon} alt='Checkmark'className={classNames('skillList__checkmark')} />
                                        {skill}
                                    </li>
                                );
                            })
                        }
                        </ul>
                    </div>
                    <ul className={classNames('skillsContent__languages')}>
                    {
                        this.props.languages.map(language => {
                            return (  
                                <li className={classNames('languageItem')}>
                                    <p className={classNames('languageItem__name')}>{language.language}</p>
                                    <p className={classNames('languageItem__rate')}>
                                    {
                                        this.createLanguageRate(language.stars)
                                    }
                                    </p>
                                </li>
                            );
                        })
                    }
                    </ul>
                </div>
            </div>
        );
    }
}

export default SkillsSection;