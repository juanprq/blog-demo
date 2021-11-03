import Head from 'next/head'

import PostPreview from '../components/post-preview';
import PostCard from '../components/post-card';
import * as postServices from '../services/posts';

import styles from './index.module.css';

const Home = ({ posts }) => {
  const [mainPost, ...rest] = posts;

  return (
    <>
      <Head>
        <title>My Super Awesome Blog - Home</title>
        <meta name="description" content="Home page of my super awesome blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PostPreview
        slug={mainPost.data.slug}
        title={mainPost.data.title}
        image={mainPost.data.coverImage}
        excerpt={mainPost.data.excerpt}
      />

      <section className={styles.postCards}>
        {
          rest.map(({ data }) =>
            <PostCard
              key={data.slug}
              slug={data.slug}
              image={data.coverImage}
              title={data.title}
              excerpt={data.excerpt}
            />
          )
        }
      </section>
    </>
  );
};

export const getStaticProps = () => {
  const posts = postServices.getAll().slice(0, 10);

  return { props: { posts: posts.map(p => ({ ...p, orig: null })) } };
};

export default Home;
