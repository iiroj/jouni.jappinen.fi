import React from 'react';
import PropTypes from 'prop-types';
import { css, injectGlobal } from 'react-emotion';
import reset from 'css-wipe';
import FontFaceObserver from 'fontfaceobserver';

import spectral from '../styles/spectral';

injectGlobal({
  ...css(reset),

  ...spectral,

  'html, body': {
    height: '100%'
  },

  '#___gatsby': {
    display: 'inline',
    height: '100%'
  },

  body: {
    fontFamily: 'serif',
    fontSize: 17,
    fontWeight: 400,
    lineHeight: '1.5rem',
    margin: 0
  },

  a: {
    color: 'inherit',
    textDecoration: 'inherit'
  }
});

const Spectral = new FontFaceObserver('Spectral');

async function unregisterServiceWorkers() {
  const registrations = await navigator.serviceWorker.getRegistrations();
  if (!registrations) return;
  for (let registration of registrations) {
    await registration.unregister();
  }
}

export default class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  async componentDidMount() {
    // TODO: Remove this after a while
    if ('serviceWorker' in navigator) {
      unregisterServiceWorkers();
    }

    await Spectral.load();
    injectGlobal({
      body: {
        fontFamily: "'Spectral', serif",
        fontSize: 16
      }
    });
  }

  render = () => this.props.children;
}
