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
    sectionUrl: string;
    isSelected: boolean;
  }>;

  constructor(props: any) {
    super(props);

    this.navigationItems = [
      {
        key: 'mi_about',
        title: 'About Me',
        sectionUrl: '/about',
        isSelected: true,
      },
      {
        key: 'mi_projects',
        title: 'Projects',
        sectionUrl: '/projects',
        isSelected: false,
      },
      {
        key: 'mi_competencies',
        title: 'Competencies',
        sectionUrl: '/competencies',
        isSelected: false,
      },
      {
        key: 'mi_education',
        title: 'Education & Experience',
        sectionUrl: '/experience',
        isSelected: false,
      },
      {
        key: 'mi_contact',
        title: 'Contact',
        sectionUrl: '/contact',
        isSelected: false,
      },
    ];
  }
  onLinkClick = (selectedItemKey: string) => {
    (document.getElementById(
      'navigation__input'
    )! as HTMLInputElement).checked = false;

    this.navigationItems = this.navigationItems.map(item => {
      return item.key === selectedItemKey
        ? { ...item, isSelected: true }
        : { ...item, isSelected: false };
    });
  };

  render() {
    return (
      <Header
        onLinkClick={this.onLinkClick}
        navigationItems={this.navigationItems}
        className={classnames(this.props.className)}
      />
    );
  }
}

export default HeaderContainer;
