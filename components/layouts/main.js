import Header from '../header';
import Footer from '../footer';

import styles from './main.module.css';

const Main = ({ children }) => (
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

export default Main;
