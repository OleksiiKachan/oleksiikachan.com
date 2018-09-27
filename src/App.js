import React, { Component } from 'react';
import './App.css';
import MainContainer from './containers/MainContainer/MainContainer.js';

class App extends Component {
    render() {
        const dataStore = require('./data.json');
        return (
            <MainContainer generalInformation={dataStore}/>
        );
    }
}

export default App;