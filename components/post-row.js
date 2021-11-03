import Image from 'next/image';
import Link from 'next/link';

import styles from './post-row.module.css';

const PostRow = ({ slug, title, image, excerpt }) => {
  return (
    <Link href={`/posts/${slug}`} passHref>
      <article className={styles.postRow}>
        <Image src={image} alt={title} width="200" height="100"/>
        <section className={styles.details}>
          <h2>{title}</h2>
          <p>{excerpt}</p>
        </section>
      </article>
    </Link>
  );
};

export default PostRow;
