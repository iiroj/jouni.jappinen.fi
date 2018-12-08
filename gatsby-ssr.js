import React from "react";
import { HelmetProvider } from "react-helmet-async";

import Layout from "./src/components/Layout";

const helmetContext = {};

export const wrapPageElement = ({ element }) => (
  <HelmetProvider context={helmetContext}>
    <Layout>{element}</Layout>
  </HelmetProvider>
);

export const onRenderBody = ({
  setBodyAttributes,
  setHeadComponents,
  setHtmlAttributes
}) => {
  const { helmet } = helmetContext;

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
