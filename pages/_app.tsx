import type { AppProps } from 'next/app';
import Client from '../client';

const App = ({ Component, pageProps }: AppProps) => (
  <Client>
    <Component {...pageProps} />
  </Client>
);

export default App;
