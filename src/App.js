import React, { Component } from 'react';
import './App.css';
import GeneralInformationContainer from './containers/GeneralInformationContainer/GeneralInformationContainer.js'
import HeaderContainer from './containers/HeaderContainer/HeaderContainer.js'
import SkillsContainer from './containers/SkillsContainer/SkillsContainer.js'
import ProjectsContainer from './containers/ProjectsContainer/ProjectsContainer.js'

class App extends Component {
    render() {
        var generalInformation = {
            name: 'Oleksii Kachan',
            title: 'UI/UX Developer & Fullstack Software Engineer',
            photo: '../images/avatar.png',
            dob: '03 April 1996',
            phone: '+1 (437) 778-5921',
            email: 'alexkachan.lutsk@gmail.com',
            bio: 'Hello there! I am a professional software engineer. My passion is helping business to focus only on business - enterprise automation on higher levels, e.g. MES & ERP System design & development. Also Helping business to improve business indicators by getting more customers & sales by implementing marketing projects, e.g. Landing pages.',
            projects: [
                {
                    projectType: 'development',
                    name: 'AGW MES / WMS for automotive industry.',
                    description: 'While working in OLSOM company I worked with some of the biggest automotive manufacturers. I was developing new features for AGW system (which is the MES/WMS for manufacturing). Also I did deployment on new manufacturies and support tickets.',
                    tools: ['dotnet', 'js', 'mssql', 'oracle'],
                    fileName: 'agw',
                    alternativeImageText: 'Automotive manufacturing',
                    downloadText: 'Go to product site'
                },
                {
                    projectType: 'development',
                    name: 'TDM (Tools Data Manager) for automotive industry.',
                    description: 'While working in OLSOM company I worked with some of the biggest automotive manufacturers. I was developing new features for TDM system. TDM - Tools Data Manager - solution that gets and analyse statistical data from automatic screwdrivers on production lines. Prouct was developed in collaboration with OLSOM L.L.C Catalyst Solutions Inc.',
                    tools: ['dotnet', 'js', 'mssql', 'oracle'],
                    fileName: 'tdm',
                    alternativeImageText: 'Automotive manufacturing',
                    downloadText: 'Go to product site'
                },
                {
                    projectType: 'design',
                    name: 'Hyperloop',
                    description: 'I was a volonteering member of rLoop team on SpaceX Hyperloop Contest. I was in System Team & Software Team. I took part in creating Final Design Resource document as a system engineer. UI development was lead by me. I created UI mockups and then in colloboration with one designer we created UI for ground station.',
                    tools: ['visio', 'illustrator', 'photoshop'],
                    fileName: 'hyperloop',
                    alternativeImageText: 'Hyperloop',
                    downloadText: 'Open file with UI'
                },
                {
                    projectType: 'reverseEngineering',
                    name: 'Corrugated Cardboard Production System',
                    description: 'I did reverse engineering of corrugated industrial cardboard manufacturing system. System was creatoed using ladder logic so I had to understand what is going on there and then create a bunch of technical documentation of how this system works. Project was done in collaboration with Agile Automation Technology L.L.C.',
                    tools: ['visio'],
                    fileName: 'corrugatedCardboard',
                    alternativeImageText: 'Corrugated Cardboard',
                    downloadText: ''
                },
                {
                    projectType: 'development',
                    name: 'FTP File Transer Service',
                    description: 'I created FTP File Transfer Service - windows service that transfers files in multiple threads via FTP to remoter & local locations. Service uses .ini file with configuration',
                    tools: ['dotnet', 'windows', 'linux'],
                    fileName: 'ftpService',
                    alternativeImageText: 'Two laptops and file transfering between them',
                    downloadText: ''
                },
                {
                    projectType: 'design',
                    name: 'Logo & Card Design',
                    description: 'My very first branding project was creating brand of myself. I defined 2 main colors, created logo, designed 2-side business card. Business card does not have title of person, because I do not want to put myself into frames of who I can be.',
                    tools: ['photoshop'],
                    fileName: 'branding_oleksiiKachan',
                    alternativeImageText: 'Business cards',
                    downloadText: 'Open presentation file'
                },
                {
                    projectType: 'design',
                    name: 'Logo & Card Design',
                    description: 'I created brand for my mother as for financial services provider. I defined 2 main colors, created logo, designed 2-side business card.',
                    tools: ['photoshop', 'illustrator'],
                    fileName: 'branding_irynaKachan',
                    alternativeImageText: 'Business cards',
                    downloadText: 'Open presentation file'
                },
                {
                    projectType: 'design',
                    name: 'Logo & Card Design',
                    description: 'I created brand for financial consultant from Ukraine. I defined 2 main colors, created logo, designed 2-side business card and created graphic candle-chart as visual element for business card. Candle-chart displayes that person is connected with advanced financial operations.',
                    tools: ['photoshop', 'illustrator'],
                    fileName: 'branding_oleksandrGorchakov',
                    alternativeImageText: 'Business cards',
                    downloadText: 'Open presentation file'
                },
                {
                    projectType: 'design',
                    name: 'Network Control Simulation System',
                    description: 'Project is a desktop system that simulates network behaviour. I was UI developer on it. I created dashboard that displayes connected devices and their indicators.',
                    tools: ['photoshop', 'dotnet'],
                    fileName: 'ui_networkControl',
                    alternativeImageText: 'UI with network parameters',
                    downloadText: 'Open first stage draft file'
                }
            ],
            skills: {
                skillSet1: [
                    'UI/UX Design',
                    'Prototyping',
                    'Software Architecture',
                    'Enterprise Software Engineering',
                    'API Development',
                    'Windows & Web Service Development',
                    'Software Testing & Deployment',
                    'Database Design & Implementation'
                ],
                skillSet2: [
                    'Logo Design',
                    'Business Card Design',
                    'Landing Page Design & Development',
                    'NoSQL Databases',
                    'Project Management',
                    'Web 3.0 Marketing',
                    'Design Systems'
                ]
            },
            languages: [
                {
                    language: 'English',
                    stars: '4'
                },
                {
                    language: 'Ukrainian',
                    stars: '5'
                },
                {
                    language: 'Russian',
                    stars: '5'
                },
                {
                    language: 'German',
                    stars: '3'
                },
                {
                    language: 'Korean',
                    stars: '1'
                },
            ],
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
    
        return (
            <div>
                <HeaderContainer name={generalInformation.name} title={generalInformation.title}/>
                <GeneralInformationContainer generalInformation={generalInformation}/>
                <ProjectsContainer projects={generalInformation.projects}/>
                <SkillsContainer skills={generalInformation.skills} languages={generalInformation.languages}/>
            </div>
        );
    }
}

export default App;