import { FunctionComponent, ReactNode } from 'react';
import { WonderEngineProvider } from 'wonder-engine';
import GlobalStyle from '../styles/globalstyles';
import { MainLayout, MainContent } from '../layout/main';
import engineConfig from './wonder-engine-config';
import Header from '../components/header';

const App: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <WonderEngineProvider config={engineConfig}>
      <GlobalStyle />
      <MainLayout>
        <Header />
        <MainContent>{children}</MainContent>
      </MainLayout>
    </WonderEngineProvider>
  );
};

export default App;