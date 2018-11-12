import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

import Layout from './src/components/Layout';

export const wrapPageElement = ({ element }) => (
  <HelmetProvider>
    <Layout>{element}</Layout>
  </HelmetProvider>
);
