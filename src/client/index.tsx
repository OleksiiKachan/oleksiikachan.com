'use client';

import Header from 'components/header';
import { MainLayout, MainContent } from 'layout/main';

import { BreakpointProvider } from './breakpoints';

const App: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <BreakpointProvider>
      <MainLayout>
        <Header />
        <MainContent>{children}</MainContent>
      </MainLayout>
    </BreakpointProvider>
  );
};

export default App;
