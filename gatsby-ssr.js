import React from 'react';
import { renderToString } from 'react-dom/server';
import { renderStylesToString } from 'emotion-server';

import Layout from './src/components/Layout';

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const html = renderStylesToString(renderToString(bodyComponent));
  replaceBodyHTMLString(html);
};

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>;
