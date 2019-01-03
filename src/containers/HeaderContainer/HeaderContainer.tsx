import React, { Component } from 'react';
import Header from '../../components/Header';
import classnames from 'classnames';

/*
    <HeaderContainer name='' title=''/>
*/
class HeaderContainer extends Component<any, any> {
  private navigationItems: Array<{
    key: string;
    title: string;
    sectionId: string;
    isSelected: boolean;
  }>;

  constructor(props: any) {
    super(props);

    this.navigationItems = [
      {
        key: 'mi_about',
        title: 'About Me',
        sectionId: '#about',
        isSelected: true,
      },
      {
        key: 'mi_portfolio',
        title: 'Portfolio',
        sectionId: '#portfolio',
        isSelected: false,
      },
      {
        key: 'mi_competencies',
        title: 'Competencies',
        sectionId: '#competencies',
        isSelected: false,
      },
      {
        key: 'mi_education',
        title: 'Education & Experience',
        sectionId: '#education',
        isSelected: false,
      },
      {
        key: 'mi_contact',
        title: 'Contact',
        sectionId: '#contact',
        isSelected: false,
      },
    ];
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (document.body.clientWidth > 864) {
      const headCover = document.getElementsByClassName('headCover')[0];
      const headCoverHeight = headCover.clientHeight;

      const headMenu = document.getElementsByClassName('navigation')[0];
      const headMenuHeight = headMenu.clientHeight;

      if (window.pageYOffset > headCoverHeight) {
        headMenu.classList.add('headMenu_scrolled');
        headMenu.classList.add('navigation_scrolled');
      } else if (window.pageYOffset < headCoverHeight + headMenuHeight) {
        headMenu.classList.remove('headMenu_scrolled');
        headMenu.classList.remove('navigation_scrolled');
      }
    }
  }

  render() {
    return (
      <Header
        name={this.props.name}
        title={this.props.title}
        navigationItems={this.navigationItems}
        className={classnames(this.props.className)}
      />
    );
  }
}

export default HeaderContainer;
