import Head from 'next/head';
import PostRow from '../components/post-row';
import Buttons from '../components/buttons';

import * as postsService from '../services/posts';
import styles from './posts.module.css'

const Posts = ({ posts }) => (
  <>
    <Head>
      <title>My Super Awesome Blog! - Posts Page</title>
    </Head>
    <section className={styles.postCards}>
      {
        (posts || []).map(({ data }) => (
          <PostRow
            key={data.slug}
            slug={data.slug}
            image={data.coverImage}
            title={data.title}
            excerpt={data.excerpt}
          />
        ))
      }
    </section>
    <Buttons />
  </>
);

export const getStaticProps = () => {
  const posts = postsService.getAll();

  return { props: { posts } };
};

export default Posts;
