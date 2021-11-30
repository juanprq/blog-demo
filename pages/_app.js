import MainLayout from '../components/layouts/main';
import * as configService from '../services/config';
import { ConfigContext } from '../hooks/use-config';

import 'prismjs/themes/prism.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const config = configService.get()

  return (
    <ConfigContext.Provider value={config}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ConfigContext.Provider>
  );
};

export default MyApp
