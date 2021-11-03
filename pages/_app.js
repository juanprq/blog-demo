import MainLayout from '../components/layouts/main';
import 'prismjs/themes/prism.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
};

export default MyApp
