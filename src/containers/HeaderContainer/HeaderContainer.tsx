import React, { Component } from 'react';
import Header from '../../components/Header';

/*
    <HeaderContainer name='' title=''/>
*/
class HeaderContainer extends Component<any, any> {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const headCover: any = document.getElementsByClassName('headCover')[0];
    const headCoverHeight: number = headCover!.clientHeight;

    const headMenu: any = document.getElementsByClassName('headMenu')[0];
    const headMenuHeight: number = headMenu!.clientHeight;
    const headMenu__logo: any = document.getElementsByClassName(
      'headMenu__logo'
    )[0];
    const headMenu__list: any = document.getElementsByClassName(
      'headMenu__list'
    )[0];
    console.log(`${window.pageYOffset} - ${headCoverHeight}`);
    if (window.pageYOffset > headCoverHeight) {
      headMenu!.classList.add('headMenu_scrolled');
      headMenu__logo!.classList.add('headMenu__logo_scrolled');
      headMenu__list!.classList.add('headMenu__list_scrolled');
    } else if (window.pageYOffset < headCoverHeight + headMenuHeight) {
      headMenu!.classList.remove('headMenu_scrolled');
      headMenu__logo!.classList.remove('headMenu__logo_scrolled');
      headMenu__list!.classList.remove('headMenu__list_scrolled');
    }
  }

  render() {
    return (
      <Header
        name={this.props.name}
        title={this.props.title}
        className={this.props.className}
      />
    );
  }
}

export default HeaderContainer;
