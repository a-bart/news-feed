import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const CustomLink = ({ path, primaryQuery, title }) => {
  const router = useRouter();

  const isActive = () => {
    if (router.query && primaryQuery) {
      return path.includes(`${router.route}?${primaryQuery}=${router.query[primaryQuery]}`);
    }
    return path.includes(router.route);
  };

  return (
    <Link href={path}>
      <a className={`${isActive() ? 'active' : ''}`}><span>{title}</span></a>
    </Link>
  );
};

export default CustomLink;
