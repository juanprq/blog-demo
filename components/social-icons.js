import Link from 'next/link';
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from 'react-icons/ai';

import styles from './social-icons.module.css';

const SocialIcons = () => (
  <section className={styles.icons}>
    <Link href="#">
      <a><AiOutlineInstagram /></a>
    </Link>
    <Link href="#">
      <a><AiOutlineFacebook /></a>
    </Link>
    <Link href="#">
      <a><AiOutlineTwitter /></a>
    </Link>
  </section>
);

export default SocialIcons;
