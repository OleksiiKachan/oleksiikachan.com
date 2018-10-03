import React, { Component } from 'react';
import classNames from 'classnames';
import './LanguagesPanel.scss';
import FilledStar from './filledStar.png';
import BlankStar from './blankStar.png';

/*
    <LanguagesPanel languages={} className='' />
*/
class LanguagesPanel extends Component {
    createLanguageRate = (rate) => {
        let visualRate = []
        rate = rate > 5 ? 5 : rate;

        for (let i = 0; i < rate; i++) {
            visualRate.push(<img src={FilledStar} alt='Filled blue star.' className={classNames('languageItem__circleRate')}/>)
        }

        for (let i = 0; i < 5-rate; i++) {
            visualRate.push(<img src={BlankStar} alt='Blank blue star.'  className={classNames('languageItem__circleRate')}/>)
        }

        return visualRate;
    }

    render() {
        return (
            <ul className={classNames(this.props.className)}>
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
        );
    }
}

export default LanguagesPanel;