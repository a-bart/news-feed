import React from 'react';
import ContentLoader from 'react-content-loader';

const BlockLoader = () => (
  <ContentLoader
    height={200}
    width={625}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="200" height="150" />
    <rect x="0" y="159" rx="0" ry="0" width="200" height="15" />
    <rect x="0" y="181" rx="0" ry="0" width="140" height="15" />
    <rect x="213" y="0" rx="0" ry="0" width="200" height="150" />
    <rect x="213" y="159" rx="0" ry="0" width="200" height="15" />
    <rect x="213" y="181" rx="0" ry="0" width="140" height="15" />
    <rect x="425" y="0" rx="0" ry="0" width="200" height="150" />
    <rect x="425" y="159" rx="0" ry="0" width="200" height="15" />
    <rect x="425" y="181" rx="0" ry="0" width="140" height="15" />
  </ContentLoader>
);

export default BlockLoader;
