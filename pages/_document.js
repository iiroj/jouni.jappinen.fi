import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { injectGlobal, ServerStyleSheet } from "styled-components";
import reset from "css-wipe/js";

injectGlobal`
  ${reset}

  html,
  body {
    height: 100%;
  }

  #__next {
    min-height: 100%;
  }

  body {
    font-family: 'Spectral', serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5rem;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="fi">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
          <link rel="apple-touch-icon" sizes="600x600" href="/static/icon.png" />
          <link rel="preload stylesheet" href="https://fonts.googleapis.com/css?family=Spectral:400,600" as="style" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
