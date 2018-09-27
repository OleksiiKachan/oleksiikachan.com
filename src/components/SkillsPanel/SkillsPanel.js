import React, { Component } from 'react';
import classNames from 'classnames';
import './SkillsPanel.css';
import CheckIcon from './checkmark.png';

/*
    <SkillsPanel skills={} className='' />
*/
class SkillsPanel extends Component {
    render() {
        return (
            <div className={classNames(this.props.className)}>
                <ul className={classNames('skillsList')}>
                {
                    this.props.skills.map(skill => {
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
        );
    }
}

export default SkillsPanel;