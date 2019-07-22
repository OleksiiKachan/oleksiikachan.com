import React, { Component } from 'react';
import AboutSection from './AboutSection/AboutSection';

/*
    <AboutContainer />
*/

export default class AboutContainer extends Component<{}> {
  render() {
    const dataStore = require('../../../data.json');
    return <AboutSection aboutInfo={dataStore} />;
  }
}
