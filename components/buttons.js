import Link from 'next/link';
import styles from './buttons.module.css';

const Buttons = () => (
  <section className={styles.buttons}>
    <Link href="#">
      <a>Previous</a>
    </Link>
    <Link href="#">
      <a>Next</a>
    </Link>
  </section>
);

export default Buttons
