import React from "react";

import Layout from "./src/components/layout";

export const wrapRootComponent = ({ Root }) => () => (
  <Layout>
    <Root />
  </Layout>
);
