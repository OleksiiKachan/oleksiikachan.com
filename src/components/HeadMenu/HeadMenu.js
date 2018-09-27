import React, { Component } from 'react';
import classNames from 'classnames';
import './HeadMenu.css';

/*
    <HeadMenu className=''/>
*/
class HeadMenu extends Component {
    constructor(props) {
        super(props);

        this.menu = [
            {
                title: 'About Me',
                sectionId: '#about',
                isSelected: true
            },
            {
                title: 'Portfolio',
                sectionId: '#portfolio',
                isSelected: false
            },
            {
                title: 'Competencies',
                sectionId: '#competencies',
                isSelected: false
            },
            {
                title: 'Education & Experience',
                sectionId: '#education',
                isSelected: false
            },
            {
                title: 'Contact',
                sectionId: '#contact',
                isSelected: false
            }
        ];
    }

    render() {
        return (
            <nav className={classNames('headMenu', this.props.className)}>
                <ul className={classNames('headMenu__list')}>
                {
                    this.menu.map(menuItem => {
                        return(
                            <li className={classNames('headMenu__listItem', menuItem.isSelected ? 'headMenu__listItem_selected' : '')}>
                                <a href={menuItem.sectionId} className={classNames('headMenu__link')}>{menuItem.title}</a>
                            </li>
                        );
                    })
                }
                </ul>
            </nav>
        );
    }
}

export default HeadMenu;