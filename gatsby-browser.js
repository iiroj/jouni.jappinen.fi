import React from "react";
import { HelmetProvider } from "react-helmet-async";

import Layout from "./src/components/Layout";

export const wrapRootElement = ({ element }) => (
  <HelmetProvider>{element}</HelmetProvider>
);

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>;
