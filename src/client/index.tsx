import { WonderEngineProvider } from 'wonder-engine';
import { StyleSheetManager } from 'styled-components';

import GlobalStyle from 'styles/globalstyles';
import Header from 'components/header';
import { MainLayout, MainContent } from 'layout/main';

import engineConfig from './wonder-engine-config';

const App: React.FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <StyleSheetManager disableVendorPrefixes>
      <WonderEngineProvider config={engineConfig}>
        <GlobalStyle />
        <MainLayout>
          <Header />
          <MainContent>{children}</MainContent>
        </MainLayout>
      </WonderEngineProvider>
    </StyleSheetManager>
  );
};

export default App;
