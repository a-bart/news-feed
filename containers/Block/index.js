import React from 'react';
import Link from 'next/link';
import NewsFeed from '../NewsFeed';
import './styles.styl';

const Block = ({ category }) => (
  <div className="block">
    <div className="block-heading">
      <h4 className="block-heading_header">{category}</h4>
      <Link href={`/news?category=${category}`}>
        <a className="block-heading_more"><span>View all</span></a>
      </Link>
    </div>
    <NewsFeed category={category} count={3} />
  </div>
);

export default Block;
