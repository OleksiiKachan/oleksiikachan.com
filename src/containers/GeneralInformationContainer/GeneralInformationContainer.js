import React, { Component } from 'react';
import GeneralInformationSection from '../../components/GeneralInformationSection'

/*
    <GeneralInformationContainer generalInformation={}/>
*/
class GeneralInformationContainer extends Component {
    render() {
        return (
            <GeneralInformationSection generalInformation={this.props.generalInformation} className={this.props.className} />
        );
    }
}

export default GeneralInformationContainer;