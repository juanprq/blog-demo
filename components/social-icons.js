import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from 'react-icons/ai';

import useConfig from '../hooks/use-config';
import styles from './social-icons.module.css';

const SocialIcons = () => {
  const { github, linkedin, twitter } = useConfig();

  return (
    <section className={styles.icons}>
      <a href={github} target="_blank" rel="noopener noreferrer">
        <AiOutlineGithub />
      </a>
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        <AiOutlineLinkedin />
      </a>
      <a href={twitter} target="_blank" rel="noopener noreferrer">
        <AiOutlineTwitter />
      </a>
    </section>
  );
};

export default SocialIcons;
