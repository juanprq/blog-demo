import Image from 'next/image';
import styles from './post-card.module.css';

const PostCard = () => (
  <article className={styles.postCard}>
    <Image src="/images/post1.png" alt="Vercel Logo" width="850" height="480" className={styles.postImage}/>
    <section>
      <h3>Post 1</h3>
      <p>an excerpt...</p>
    </section>
  </article>
);

export default PostCard;
