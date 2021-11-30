import SocialIcons from './social-icons';
import styles from './footer.module.css';

import useConfig from '../hooks/use-config';

const Footer = () => {
  const { title } = useConfig();

  return (
    <footer className={styles.footer}>
      <section className={styles.container}>
        <SocialIcons />
        {title}
      </section>
    </footer>
  );
};

export default Footer;
