import Image from 'next/image';
import Link from 'next/link';
import styles from './post-card.module.css';

const PostCard = ({ slug, image, title, excerpt }) => (
  <Link href={slug} passHref>
    <article className={styles.postCard}>
      <Image src={image} alt={title} width="850" height="480" className={styles.postImage}/>
      <section>
        <h3>{title}</h3>
        <p>{excerpt}</p>
      </section>
    </article>
  </Link>
);

export default PostCard;
