import React from 'react';

import Layout from './src/components/Layout';

export const wrapRootComponent = ({ Root }) => () => (
  <Layout>
    <Root />
  </Layout>
);
