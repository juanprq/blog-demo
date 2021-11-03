import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import marked from 'marked';

const POSTS_PATH = path.join(process.cwd(), 'posts');

const loadFileNames = () => {
  const filePaths = fs.readdirSync(POSTS_PATH);
  return filePaths;
};

export const get = postName => {
  const body = fs.readFileSync(path.join(POSTS_PATH, postName), 'utf8');
  const frontMatter = matter(body);
  const html = marked(frontMatter.content);
  const [slug] = postName.split('.');

  return {
    html,
    data: { ...frontMatter.data, slug },
  };
};

export const getAll = () => {
  const postPaths = loadFileNames();
  const posts = postPaths.map(get);

  return posts.sort((a, b) => (a.data.date < b.data.date) ? 1 : -1);
};
