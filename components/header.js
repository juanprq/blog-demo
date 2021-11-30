import { CgNotes } from 'react-icons/cg';

import useConfig from '../hooks/use-config';
import Navbar from './navbar';
import styles from './header.module.css';

const Header = () => {
  const { title } = useConfig();

  return (
    <header className={styles.header}>
      <CgNotes className={styles.logo} />
      <h1>{title}</h1>
      <Navbar />
    </header>
  );
};

export default Header;
