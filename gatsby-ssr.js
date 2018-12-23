import React from "react";
import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";

import Layout from "./src/components/Layout";

const helmetContext = {};

export const wrapRootElement = ({ element }) => (
  <HelmetProvider context={helmetContext}>{element}</HelmetProvider>
);

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>;

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setBodyAttributes,
  setHeadComponents,
  setHtmlAttributes
}) => {
  const html = renderToString(bodyComponent);

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
