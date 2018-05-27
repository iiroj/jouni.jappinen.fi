import React from "react";
import DefaultDocument, { Head, Main, NextScript } from "next/document";
import { extractCritical } from "emotion-server";

export default class Document extends DefaultDocument {
  static getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = extractCritical(page.html);
    return { ...page, ...styles };
  }

  constructor(props) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = ids;
    }
  }

  render = () => (
    <html lang="fi">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="600x600" href="/static/icon.png" />
        <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </html>
  );
}
