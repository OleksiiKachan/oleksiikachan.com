import React, { Component } from 'react';
import classNames from 'classnames';
import './HeadMenu.scss';

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
            },
            {
                title: 'Competencies',
                sectionId: '#competencies',
            },
            {
                title: 'Education & Experience',
                sectionId: '#education',
            },
            {
                title: 'Contact',
                sectionId: '#contact',
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