import React from 'react';
import ContentLoader from 'react-content-loader';

const Sceleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#ededed"
    foregroundColor="#d1d1d1"
    {...props}>
    <rect x="3" y="264" rx="10" ry="10" width="269" height="24" />
    <rect x="6" y="310" rx="10" ry="10" width="271" height="85" />
    <rect x="6" y="429" rx="11" ry="11" width="90" height="27" />
    <rect x="132" y="413" rx="20" ry="20" width="140" height="46" />
    <circle cx="132" cy="130" r="120" />
  </ContentLoader>
);

export default Sceleton;
