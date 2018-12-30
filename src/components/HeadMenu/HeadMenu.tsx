import React, { Component } from 'react';
import classNames from 'classnames';
import './HeadMenu.scss';

/*
    <HeadMenu className=''/>
*/
class HeadMenu extends Component<any, any> {
  menu: Array<{ title: string; sectionId: string; isSelected: boolean }>;

  constructor(props: any) {
    super(props);

    this.menu = [
      {
        title: 'About Me',
        sectionId: '#about',
        isSelected: true,
      },
      {
        title: 'Portfolio',
        sectionId: '#portfolio',
        isSelected: false,
      },
      {
        title: 'Competencies',
        sectionId: '#competencies',
        isSelected: false,
      },
      {
        title: 'Education & Experience',
        sectionId: '#education',
        isSelected: false,
      },
      {
        title: 'Contact',
        sectionId: '#contact',
        isSelected: false,
      },
    ];
  }

  render() {
    return (
      <nav className={classNames('headMenu', this.props.className)}>
        <img
          src="https://res.cloudinary.com/oleksiikachan/image/upload/v1546142703/portfolio/images/logo/logo_horizontal_light.svg"
          className={classNames('headMenu__logo')}
        />
        <ul className={classNames('headMenu__list')}>
          {this.menu.map(menuItem => {
            return (
              <li className={classNames('headMenu__listItem')}>
                <a
                  href={menuItem.sectionId}
                  className={classNames(
                    'headMenu__link',
                    menuItem.isSelected ? 'headMenu__link_selected' : ''
                  )}
                >
                  {menuItem.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default HeadMenu;
