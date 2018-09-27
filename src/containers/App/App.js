import React, { Component } from 'react';
import MainContainer from '../MainContainer';

class App extends Component {
    render() {
        const dataStore = require('../../data.json');
        return (
            <MainContainer generalInformation={dataStore}/>
        );
    }
}

export default App;