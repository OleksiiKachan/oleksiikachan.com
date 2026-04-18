'use client';

import Header from 'components/header';
import { MainLayout, MainContent } from 'layout/main';

import { BreakpointProvider } from './breakpoints';

type AppProps = {
  children: React.ReactNode;
};

const App = ({ children }: AppProps) => {
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
