import React, { Component } from 'react';
import GeneralInformationSection from '../../components/GeneralInformationSection/GeneralInformationSection.js'

/*
    <GeneralInformationContainer generalInformation={}/>
*/
class GeneralInformationContainer extends Component {
    render() {
        return (
            <GeneralInformationSection generalInformation={this.props.generalInformation} />
        );
    }
}

export default GeneralInformationContainer;