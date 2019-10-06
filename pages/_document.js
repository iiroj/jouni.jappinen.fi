import React from "react";
import NextDocument, { Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  static getInitialProps = async ctx => {
    let helmetContext;

    const page = ctx.renderPage({
      enhanceApp: App => props => {
        const app = new App(props);
        helmetContext = app.helmetContext;
        return app;
      },
      enhancePage: Page => page
    });

    return { ...page, helmetContext };
  };

  render() {
    const { helmetContext } = this.props;

    return (
      <html>
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
      </html>
    );
  }
}
