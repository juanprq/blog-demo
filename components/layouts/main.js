import prism from 'prismjs';
import 'prismjs/components/prism-jsx.min';
import { useEffect } from 'react';

import Header from '../header';
import Footer from '../footer';

import styles from './main.module.css';

const Main = ({ children }) => {
  useEffect(() => {
    prism.highlightAll();
  });

  return (
    <div>
      <div className={styles.container}>
        <Header />
        <main>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
