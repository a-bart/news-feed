import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import PostContainer from '../containers/Post';
import Nav from '../components/Nav';

const Post = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{`Post - ${router.query.title}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className="post-container">
        <PostContainer />
      </div>
    </div>
  );
};

export default Post;
