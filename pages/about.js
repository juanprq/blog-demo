import Head from 'next/head';
import Profile from '../components/profile';

import useConfig from '../hooks/use-config';


const About = () => {
  const { title } = useConfig();

  return (
    <>
      <Head>
        <title>{title} - About</title>
      </Head>

      <Profile />
    </>
  );
};

export default About;
