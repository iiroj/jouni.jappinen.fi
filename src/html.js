import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

const isProduction = process.env.NODE_ENV === "production";

let stylesStr;
if (isProduction) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`);
  } catch (e) {
    console.log(e);
  }
}

export default function HTML(props) {
  const head = Helmet.rewind();
  const css = (
    <style
      id="gatsby-inlined-css"
      dangerouslySetInnerHTML={{ __html: stylesStr }}
    />
  );

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        {props.headComponents}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" sizes="600x600" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link
          rel="preload stylesheet"
          href="https://fonts.googleapis.com/css?family=Noto+Serif:400,400i"
          as="style"
        />
        {isProduction && css}
      </head>
      <body>
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  body: PropTypes.object.isRequired,
  headComponents: PropTypes.object.isRequired,
  postBodyComponents: PropTypes.object.isRequired
};
