'use client';

import Header from 'components/header';
import { MainLayout, MainContent } from 'layout/main';

import { SystemConfigProvider } from './system-config-context';

const App: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SystemConfigProvider>
      <MainLayout>
        <Header />
        <MainContent>{children}</MainContent>
      </MainLayout>
    </SystemConfigProvider>
  );
};

export default App;
