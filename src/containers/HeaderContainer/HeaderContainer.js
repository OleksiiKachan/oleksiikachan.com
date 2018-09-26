import React, { Component } from 'react';
import Header from '../../components/Header/Header.js'

/*
    <HeaderContainer name='' title=''/>
*/
class HeaderContainer extends Component {
    render() {
        return (
            <Header name={this.props.name} title={this.props.title} className={this.props.className} />
        );
    }
}

export default HeaderContainer;
