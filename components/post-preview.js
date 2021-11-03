import Image from 'next/image';
import Link from 'next/link';

import styles from './post-preview.module.css';

const PostPreview = ({ title, slug, image, excerpt }) => (
  <Link href={`/posts/${slug}`} passHref>
    <article className={styles.postPreview}>
      <Image src={image} alt={title} width="850" height="480" className={styles.postImage}/>
      <section>
        <h2>{title}</h2>
        <p>{excerpt}</p>
      </section>
    </article>
  </Link>
);

export default PostPreview;
