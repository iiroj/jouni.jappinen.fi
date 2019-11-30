import { HelmetProvider } from "react-helmet-async";
import React from "react";

import Main from "../components/Main";
import Reset from "../components/Reset";

const App = ({ Component, pageProps }) => {
  const helmet = React.useRef({});

  return (
    <>
      <Reset />
      <HelmetProvider context={helmet.current}>
        <Main>
          <Component {...pageProps} helmetContext={helmet.current} />
        </Main>
      </HelmetProvider>
    </>
  );
};

export default App;
