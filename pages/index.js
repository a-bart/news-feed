import React from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';
import Block from '../containers/Block';
import '../styles/main.styl';

const Home = () => (
  <div>
    <Head>
      <title>News - Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
    <div className="page-container">
      <Block category="business" />
      <Block category="entertainment" />
      <Block category="health" />
    </div>
  </div>
);

export default Home;
