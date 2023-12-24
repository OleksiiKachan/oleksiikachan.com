import { WonderEngineProvider } from 'wonder-engine';
import { StyleSheetManager } from 'styled-components';

import GlobalStyle from 'styles/globalstyles';
import Header from 'components/header';
import { MainLayout, MainContent } from 'layout/main';

import engineConfig from './wonder-engine-config';
import { SystemConfigProvider } from './system-config-context';

const App: React.FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <StyleSheetManager>
      <WonderEngineProvider config={engineConfig}>
        <SystemConfigProvider>
          <GlobalStyle />
          <MainLayout>
            <Header />
            <MainContent>{children}</MainContent>
          </MainLayout>
        </SystemConfigProvider>
      </WonderEngineProvider>
    </StyleSheetManager>
  );
};

export default App;
