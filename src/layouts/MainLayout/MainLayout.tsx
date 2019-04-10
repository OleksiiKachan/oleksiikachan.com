import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import './MainLayout.scss';

/*
  <MainLayout className=''>
    {children}
  </MainLayout>
*/

type PropsType = {
  className?: string;
  children: ReactNode;
};

class MainLayout extends Component<PropsType> {
  render() {
    return (
      <div className={classNames('app')}>
        <main className={classNames('app__mainContent', this.props.className)}>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default MainLayout;
