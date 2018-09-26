import React, { Component } from 'react';
import classNames from 'classnames';
import './ToolIcon.css';
import photoshopIcon from './images/photoshop.svg';
import illustratorIcon from './images/illustrator.svg';
import dotnetIcon from './images/dotnet.svg';
import visioIcon from './images/visio.svg';
import windowsIcon from './images/windows.svg';
import linuxIcon from './images/linux.svg';
import jsIcon from './images/js.svg';
import mssqlIcon from './images/mssql.svg';
import oracleIcon from './images/oracle.svg';

/*
    <ToolIcon tool='' className=''/>
*/
class ToolIcon extends Component {
    getToolIcon = (tool) => {
        switch(tool) {
            case 'photoshop': return photoshopIcon;
            case 'illustrator': return illustratorIcon;
            case 'dotnet': return dotnetIcon;
            case 'visio': return visioIcon;
            case 'windows': return windowsIcon;
            case 'linux': return linuxIcon;
            case 'js': return jsIcon;
            case 'mssql': return mssqlIcon;
            case 'oracle': return oracleIcon;
            default: return null;
        }
    }
    render() {
        return(
            <img alt={this.props.tool} className={classNames('toolIcon', this.props.className)} src={this.getToolIcon(this.props.tool)}/>
        );
    }
}

export default ToolIcon;