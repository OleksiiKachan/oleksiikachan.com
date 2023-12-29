import { useMemo } from 'react';
import { WonderEngineProvider } from 'wonder-engine';
import { StyleSheetManager } from 'styled-components';
import { usePathname } from 'next/navigation';

import GlobalStyle from 'styles/globalstyles';
import Header from 'components/header';
import { MainLayout, MainContent } from 'layout/main';

import engineConfig from './wonder-engine-config';
import { SystemConfigProvider } from './system-config-context';

const App: React.FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();

  const isSystem = useMemo(
    () => [`/studio`].includes(pathname as string),
    [pathname]
  );

  return isSystem ? (
    children
  ) : (
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
