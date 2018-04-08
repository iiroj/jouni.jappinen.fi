import React, { PureComponent } from "react";
import FontFaceObserver from "fontfaceobserver";
import { injectGlobal } from "styled-components";
import reset from "css-wipe/js";

import font from "./fonts";
const observe = new FontFaceObserver("Spectral");

const withGlobalStyles = Page =>
  class GlobalStyles extends PureComponent {
    componentDidMount = () =>
      observe.load().then(injectGlobal`
        body {
          font-family: "Spectral", sans-serif;
        }
      `);

    render = () => <Page {...this.props} />;
  };

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

export default withGlobalStyles;
