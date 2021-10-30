import Image from 'next/image';

import styles from './post-preview.module.css';

const PostPreview = () => (
  <article className={styles.postPreview}>
    <Image src="/images/post1.png" alt="Vercel Logo" width="850" height="480" className={styles.postImage}/>
    <section>
      <h2>This is my last post!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </section>
  </article>
);

export default PostPreview;
