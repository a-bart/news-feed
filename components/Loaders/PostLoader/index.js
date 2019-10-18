import React from 'react';
import ContentLoader from 'react-content-loader';

const PostLoader = () => (
  <ContentLoader
    height={300}
    width={300}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="300" height="180" />
    <rect x="0" y="190" rx="0" ry="0" width="292" height="20" />
    <rect x="0" y="215" rx="0" ry="0" width="239" height="20" />
    <rect x="0" y="242" rx="0" ry="0" width="274" height="20" />
  </ContentLoader>
);

export default PostLoader;
