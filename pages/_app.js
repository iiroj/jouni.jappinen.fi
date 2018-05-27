import React from "react";
import DefaultApp, { Container } from "next/app";
import FontFaceObserver from "fontfaceobserver";
import { hydrate, injectGlobal } from "react-emotion";
import reset from "css-wipe/js";

import font from "../styles/fonts";

injectGlobal`
  ${font}
  ${reset}

  html,
  body {
    height: 100%;
  }

  #__next {
    display: inline;
    height: 100%;
  }

  body {
    font-family: serif;
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

if (typeof window !== "undefined") {
  hydrate(window.__NEXT_DATA__.ids);
}

const observe = new FontFaceObserver("Spectral");

export default class App extends DefaultApp {
  static async getInitialProps({ Component, router, ctx }) {
    if (Component.getInitialProps) {
      return { pageProps: await Component.getInitialProps(ctx) };
    } else {
      return { pageProps: {} };
    }
  }

  componentDidMount() {
    observe.load().then(injectGlobal`
        body {
          font-family: "Spectral", serif;
        }
    `);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}
