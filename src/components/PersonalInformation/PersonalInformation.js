import React, { Component } from 'react';
import classNames from 'classnames';
import './PersonalInformation.css';

/*
    <PersonalInformation information={} className='' />
*/
class PersonalInformation extends Component {
    render() {
        return (
            <div className={classNames('personalInformation', this.props.className)}>
                <h3 className={classNames('mainInformation__header')}>PERSONAL INFORMATION</h3>
                    <ul className={classNames('personalInformation__list')}>
                        <li className={classNames('personalInformation__listItem')}>
                            <p>Name:</p>
                            <p>{this.props.information.name}</p>
                        </li>
                        <li className={classNames('personalInformation__listItem')}>
                            <p>Date of Birth:</p>
                            <p>{this.props.information.dob}</p>
                        </li>
                        <li className={classNames('personalInformation__listItem')}>
                            <p>Phone:</p>
                            <p>{this.props.information.contacts.phone}</p>
                        </li>
                        <li className={classNames('personalInformation__listItem')}>
                            <p>Email:</p>
                            <p>{this.props.information.contacts.email}</p>
                        </li>
                    </ul>
                </div>
        );
    }
}

export default PersonalInformation;