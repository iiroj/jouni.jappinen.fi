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
