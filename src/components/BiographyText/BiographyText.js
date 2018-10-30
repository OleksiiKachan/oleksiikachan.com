import React, { Component } from 'react';
import classNames from 'classnames';
import './BiographyText.scss';

/*
    <BiographyText bio={}  className=''/>
*/
class BiographyText extends Component {
  renderList = list => {
    return (
      <ol className={classNames('biography__list')}>
        {list.map(listItem => {
          return <li>{listItem}</li>;
        })}
      </ol>
    );
  };

  render() {
    return (
      <div className={classNames(this.props.className)}>
        <span>{this.props.bio.introduction}</span>
        <br />
        <span>{this.props.bio.passionIntroduction}</span>
        {this.renderList(this.props.bio.passions)}
        <span>{this.props.bio.stackIntroduction}</span>
        {this.renderList(this.props.bio.techStacks)}
      </div>
    );
  }
}

export default BiographyText;
