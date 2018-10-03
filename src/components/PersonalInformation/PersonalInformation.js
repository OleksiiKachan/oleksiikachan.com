import React, { Component } from 'react';
import classNames from 'classnames';
import './PersonalInformation.scss';

/*
    <PersonalInformation information={} className='' />
*/
class PersonalInformation extends Component {
    constructor(props) {
        super(props);

        this.information = [
            {
                title: 'Name',
                value: this.props.information.name
            },
            {
                title: 'Date of Birth',
                value: this.props.information.dob
            },
            {
                title: 'Phone',
                value: this.props.information.contacts.phone
            },
            {
                title: 'Email',
                value: this.props.information.contacts.email
            },
        ];
    }

    render() {
        return (
            <div className={classNames('personalInformation', this.props.className)}>
                <h3 className={classNames('mainInformation__header')}>PERSONAL INFORMATION</h3>
                    <ul className={classNames('personalInformation__list')}>
                    {
                        this.information.map(informationItem => {
                            return(
                                <li className={classNames('personalInformation__listItem')}>
                                    <p>{informationItem.title}:</p>
                                    <p>{informationItem.value}</p>
                                </li>
                            );
                        })
                    }
                    </ul>
                </div>
        );
    }
}

export default PersonalInformation;