import Head from 'next/head';
import PostCard from '../components/post-card';
import Buttons from '../components/buttons';

import styles from './posts.module.css'

const Posts = () => (
  <>
    <Head>
      <title>My Super Awesome Blog! - Posts Page</title>
    </Head>
    <section className={styles.postCards}>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </section>
    <Buttons />
  </>
);

export default Posts;
