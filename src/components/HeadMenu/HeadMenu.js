import React, { Component } from 'react';
import classNames from 'classnames';
import './HeadMenu.css';

/*
    <HeadMenu className=''/>
*/
class HeadMenu extends Component {
    render() {
        return (
                <nav className={classNames('headMenu', this.props.className)}>
                    <ul className={classNames('headMenu__list')}>
                        <li className={classNames('headMenu__listItem', 'headMenu__listItem_selected')}>
                            <a href='#about' className={classNames('headMenu__link')}>About Me</a>
                        </li>
                        <li className={classNames('headMenu__listItem')}>
                            <a href='#portfolio' className={classNames('headMenu__link')}>Portfolio</a>
                        </li>
                        <li className={classNames('headMenu__listItem')}>
                            <a href='#skills' className={classNames('headMenu__link')}>Skills</a>
                        </li>
                        <li className={classNames('headMenu__listItem')}>
                            <a href='#education' className={classNames('headMenu__link')}>Education</a>
                        </li>
                        <li className={classNames('headMenu__listItem')}>
                            <a href='#contact' className={classNames('headMenu__link')}>Contact</a>
                        </li>
                    </ul>
                </nav>
        );
    }
}

export default HeadMenu;