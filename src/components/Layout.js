import React from "react";
import PropTypes from "prop-types";
import { css, injectGlobal } from "react-emotion";
import reset from "css-wipe";
import FontFaceObserver from "fontfaceobserver";

import spectral from "../styles/spectral";

injectGlobal({
  ...css(reset),

  ...spectral,

  "html, body": {
    height: "100%",
  },

  "#___gatsby": {
    display: "inline",
    height: "100%",
  },

  body: {
    fontFamily: "serif",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "1.5rem",
    margin: 0,
  },

  a: {
    color: "inherit",
    textDecoration: "inherit",
  },
});

const Spectral = new FontFaceObserver("Spectral");

export default class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  async componentDidMount() {
    await Spectral.load();
    injectGlobal({
      body: {
        fontFamily: "'Spectral', serif",
      },
    });
  }

  render = () => this.props.children;
}
