import { StyleSheetManager } from 'styled-components';

import GlobalStyle from 'styles/globalstyles';
import Header from 'components/header';
import { MainLayout, MainContent } from 'layout/main';

import { SystemConfigProvider } from './system-config-context';

const App: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <StyleSheetManager>
      <SystemConfigProvider>
        <GlobalStyle />
        <MainLayout>
          <Header />
          <MainContent>{children}</MainContent>
        </MainLayout>
      </SystemConfigProvider>
    </StyleSheetManager>
  );
};

export default App;
