import React from 'react';
import PropTypes from 'prop-types';
import { ServerStyleSheet } from 'styled-components';
import Helmet from 'react-helmet';

const HTML = props => {
  const head = Helmet.rewind();
  const sheet = new ServerStyleSheet();
  const main = sheet.collectStyles(<div id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />);
  const css = sheet.getStyleElement();

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
        <link rel="preload stylesheet" href="https://fonts.googleapis.com/css?family=Spectral:400,600" as="style" />
        {process.env.NODE_ENV === 'production' && css}
      </head>
      <body>
        {main}
        {props.postBodyComponents}
      </body>
    </html>
  );
};

HTML.propTypes = {
  body: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  headComponents: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  postBodyComponents: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default HTML;
