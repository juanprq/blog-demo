import Head from 'next/head';

import useConfig from '../../hooks/use-config';
import * as postsService from '../../services/posts';

const Post = ({ post }) => {
  const { title } = useConfig();

  return (
    <>
      <Head>
        <title>{title} - {post.data.title}</title>
      </Head>
      <h1>{post.data.title}</h1>
      <section dangerouslySetInnerHTML={{ __html: post.html }} />
    </>
  );
};

export const getStaticPaths = () => {
  const posts = postsService.getAll();
  const slugs = posts.map(post => post.data.slug);

  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const post = postsService.get(`${params.slug}.md`);

  return { props: { post } };
};

export default Post;
