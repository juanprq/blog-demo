import { CgNotes } from 'react-icons/cg';

import Navbar from './navbar';
import styles from './header.module.css';

const Header = () => (
  <header className={styles.header}>
    <CgNotes className={styles.logo} />
    <h1>My Super Awesome Blog!</h1>

    <Navbar />
  </header>
);

export default Header;
