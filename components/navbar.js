import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = () => (
  <nav>
    <ul className={styles.menu}>
      <li>
        <Link href="/"><a>Home</a></Link>
      </li>
      <li>
        <Link href="/posts"><a>Posts</a></Link>
      </li>
      <li>
        <Link href="/about"><a>About</a></Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
