import SocialIcons from './social-icons';
import styles from './footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <section className={styles.container}>
      <SocialIcons />
      My Super Awesome Blog!
    </section>
  </footer>
);

export default Footer;
