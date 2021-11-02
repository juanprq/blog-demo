import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import marked from 'marked';

const POSTS_PATH = path.join(process.cwd(), 'posts');

const loadPostFiles = () => {
  const filePaths = fs.readdirSync(POSTS_PATH);
  return filePaths;
};

export const loadPost = postName => {
  const body = fs.readFileSync(path.join(POSTS_PATH, postName), 'utf8');
  const frontMatter = matter(body);
  const html = marked(frontMatter.content);

  return {
    ...frontMatter,
    html
  };
};

export const loadAllPosts = () => {
  const postPaths = loadPostFiles();
  const posts = postPaths.map(loadPost);

  return posts.sort((a, b) => (a.data.date > b.data.date) ? 1 : -1);
};
