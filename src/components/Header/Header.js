import React, { Component } from 'react';
import classNames from 'classnames';
import './Header.css';
import HeadMenu from '../HeadMenu'

/*
    <Header name='' title=''/>
*/
class Header extends Component {
    render() {
        return (
            <header id='header' className={classNames('header', this.props.className)}>
                <div className={classNames('headContent', 'header__content')}>
                    <div className={classNames('headContent__filter')}>
                        <div className={classNames('headTitle header__title')}>
                            <h1 className={classNames('headTitle__name')}>{this.props.name}</h1>
                            <h2 className={classNames('headTitle__title')}>{this.props.title}</h2>
                        </div>
                        <div className={classNames('header__button')}>
                            <a href='#contact' className={classNames('actionButton')}>Hire Me</a>
                        </div>
                    </div>
                </div>
                <HeadMenu className={classNames('header__menu')}/>
            </header>
        );
    }
}

export default Header;