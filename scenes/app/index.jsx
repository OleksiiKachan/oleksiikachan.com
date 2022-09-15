import { WonderEngineProvider } from 'wonder-engine';
import GlobalStyle from '../../styles/globalstyles';
import MainLayout from '../../layout/main';
import engineConfig from './wonder-engine-config';
import Header from '../../components/header';

const App = ({ children }) => {
  return (
    <WonderEngineProvider config={engineConfig}>
      <GlobalStyle />
      <MainLayout>
        <Header />
        {children}
      </MainLayout>
    </WonderEngineProvider>
  );
};

export default App;
