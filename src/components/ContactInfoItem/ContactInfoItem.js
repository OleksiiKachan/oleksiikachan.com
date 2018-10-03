import React, { Component } from 'react';
import classNames from 'classnames';
import './ContactInfoItem.scss';

/*
    <ContactInfoItem icon='' text='' className />
*/
class ContactInfoItem extends Component {
    render() {
        return (
            <div className={classNames('contactInfo__contactItem', this.props.className)}>
                <img className={classNames('contactInfo__icon')} src={this.props.icon} alt='phone' />
                <p className={classNames('contactInfo__text')}>{this.props.text}</p>
            </div>
        );
    }
}

export default ContactInfoItem;