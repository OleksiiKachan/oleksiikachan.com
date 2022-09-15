import type { AppProps } from 'next/app';
import AppScene from '../scenes/app';

const App = ({ Component, pageProps }: AppProps) => (
  <AppScene>
    <Component {...pageProps} />
  </AppScene>
);

export default App;
