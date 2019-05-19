import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import HeaderContainer from '../../containers/HeaderContainer';
import './MainLayout.scss';

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
        <HeaderContainer />
        <main className={classNames('app__mainContent', this.props.className)}>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default MainLayout;
