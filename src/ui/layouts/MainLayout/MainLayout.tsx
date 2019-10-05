import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';

import { HeaderContainer, FooterContainer } from '../../pages';
import { GlobalStyle } from '../../assets/style';

/*
  <MainLayout
    className=''
  >
    {children}
  </MainLayout>
*/

type PropsType = {
  children: ReactNode;
  className?: string;
};

class MainLayout extends Component<PropsType> {
  render() {
    return (
      <div className={classNames('app')}>
        <GlobalStyle />
        <HeaderContainer />
        <main className={classNames('app__mainContent', this.props.className)}>
          {this.props.children}
        </main>
        <FooterContainer />
      </div>
    );
  }
}

export default MainLayout;
