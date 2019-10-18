import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Nav from '../components/Nav';
import NewsFeed from '../containers/NewsFeed';

const News = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div>
      <Head>
        <title>{`News - ${category}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className="page-container">
        <NewsFeed category={category} count={9} />
      </div>
    </div>
  );
};

export default News;
