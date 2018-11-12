import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { renderToString } from 'react-dom/server';
import { renderStylesToString } from 'emotion-server';

import Layout from './src/components/Layout';

const helmetContext = {};

export const wrapPageElement = ({ element }) => (
  <HelmetProvider context={helmetContext}>
    <Layout>{element}</Layout>
  </HelmetProvider>
);

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setBodyAttributes,
  setHeadComponents,
  setHtmlAttributes
}) => {
  const html = renderStylesToString(renderToString(bodyComponent));

  const { helmet } = helmetContext;

  replaceBodyHTMLString(html);
  setHtmlAttributes(helmet.htmlAttributes.toComponent());
  setBodyAttributes(helmet.bodyAttributes.toComponent());
  setHeadComponents([
    helmet.title.toComponent(),
    helmet.link.toComponent(),
    helmet.meta.toComponent(),
    helmet.noscript.toComponent(),
    helmet.script.toComponent(),
    helmet.style.toComponent()
  ]);
};
