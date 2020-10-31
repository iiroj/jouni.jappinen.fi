import React from "react";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";

class Document extends NextDocument {
  static getInitialProps = async (ctx) => {
    let helmetContext;

    const page = ctx.renderPage({
      enhanceApp: (component) => (props) => {
        const app = component(props);
        helmetContext = app.helmetContext;
        return app;
      },
      enhancePage: (Page) => page,
    });

    return { ...page, helmetContext };
  };

  render() {
    const { helmetContext } = this.props;

    return (
      <Html lang="fi">
        <Head>
          {helmetContext && helmetContext.helmet && (
            <>
              {helmetContext && helmetContext.helmet.meta.toComponent()}
              {helmetContext && helmetContext.helmet.link.toComponent()}
              {helmetContext && helmetContext.helmet.title.toComponent()}
              {helmetContext && helmetContext.helmet.script.toComponent()}
            </>
          )}
          <link
            crossOrigin="anonymous"
            href="https://fonts.googleapis.com/css?family=Spectral:400,600&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="apple-touch-icon" href="/icon.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
