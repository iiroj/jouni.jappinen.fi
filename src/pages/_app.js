import { HelmetProvider } from "react-helmet-async";
import React from "react";

import Layout from "../components/Layout";

const App = ({ Component, pageProps }) => {
  const helmet = React.useRef({});

  return (
    <HelmetProvider context={helmet.current}>
      <Layout>
        <Component {...pageProps} helmetContext={helmet.current} />
      </Layout>
    </HelmetProvider>
  );
};

export default App;
