import React, { Component } from 'react';
import classNames from 'classnames';
import './SocialMediaButtonPanel.css';
import SocialMediaButton from '../SocialMediaButton/SocialMediaButton.js'

/*
    <SocialMediaButtonPanel resources='{link, resource}' className=''/>
*/
class SocialMediaButtonPanel extends Component {
    render() {
        return (
            <div className={classNames('smPanel', this.props.className)}>
                <p className={classNames('smCall smPanel__call')}>Follow Me on</p>
                <ul className={classNames('smButtonList smPanel__buttonList')}>
                {
                    this.props.resources.map(smResource => {
                    return (  
                        <li className={classNames('smButtonList__listItem')}>
                            <SocialMediaButton link={smResource.link} resource={smResource.resource}/>
                        </li>
                    );
                    })
                }
                </ul>
            </div>
        );
    }
}

export default SocialMediaButtonPanel;