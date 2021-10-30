import Head from 'next/head'

import PostPreview from '../components/post-preview';
import PostCard from '../components/post-card';

import styles from './index.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Super Awesome Blog - Home</title>
        <meta name="description" content="Home page of my super awesome blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PostPreview />

      <section className={styles.postCards}>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </section>
    </>
  );
};
