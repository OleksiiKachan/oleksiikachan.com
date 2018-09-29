import React, { Component } from 'react';
import classNames from 'classnames';
import './BiographyText.css';

/*
    <BiographyText bio={}  className=''/>
*/
class BiographyText extends Component {
    render() {
        return (
            <div className={classNames(this.props.className)}>
                <span>{this.props.bio.introduction}</span>
                <br/>
                <span>{this.props.bio.passionIntroduction}</span>
                <ol className={classNames('biography__list')}>
                {
                    this.props.bio.passions.map(passion => {
                        return(
                            <li>{passion}</li>
                        );
                    })
                }
                </ol>
                <span>{this.props.bio.stackIntroduction}</span>
                <ol className={classNames('biography__list')}>
                {
                    this.props.bio.techStacks.map(stack => {
                        return(
                            <li>{stack}</li>
                        );
                    })
                }
                </ol>
            </div>
        );
    }
}

export default BiographyText;