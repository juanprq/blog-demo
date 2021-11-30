import Head from 'next/head';
import PostRow from '../components/post-row';

import useConfig from '../hooks/use-config';
import * as postsService from '../services/posts';
import styles from './posts.module.css'

const Posts = ({ posts }) => {
  const { title } = useConfig();

  return (
    <>
      <Head>
        <title>{title} - Posts Page</title>
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
    </>
  );
};

export const getStaticProps = () => {
  const posts = postsService.getAll();

  return { props: { posts } };
};

export default Posts;
