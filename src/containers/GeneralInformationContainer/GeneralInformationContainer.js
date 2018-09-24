import React, { Component } from 'react';
import GeneralInformationSection from '../../components/GeneralInformationSection/GeneralInformationSection.js'

/*
    <GeneralInformationContainer/>
*/
class GeneralInformationContainer extends Component {
    constructor(props) {
        super(props);

        this.generalInformation = {
            name: 'Oleksii Kachan',
            title: 'Fullstack Software Engineer',
            photo: '../images/avatar.png',
            dob: '03 April 1996',
            phone: '+1 (437) 778-5921',
            email: 'alexkachan.lutsk@gmail.com',
            bio: 'Hello there! I am a professional software engineer. My passion is helping business to focus only on business - enterprise automation on higher levels, e.g. MES & ERP System design & development. Also Helping business to improve business indicators by getting more customers & sales by implementing marketing projects, e.g. Landing pages.',
            resources: [
                {
                    link: 'http://www.linkedin.com/in/oleksiikachan',
                    resource: 'linkedin',
                },
                {
                    link: 'https://www.facebook.com/oleksiikachan',
                    resource: 'facebook',
                },
                {
                    link: 'https://www.instagram.com/oleksii.kachan/',
                    resource: 'instagram',
                },
                {
                    link: 'https://vk.com/oleksiikachan',
                    resource: 'vk',
                }
            ]
        };
    }

    render() {
        return (
        <GeneralInformationSection generalInformation={this.generalInformation} />
        );
    }
}

export default GeneralInformationContainer;
