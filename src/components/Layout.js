import React from 'react';
import { injectGlobal } from 'emotion';
import FontFaceObserver from 'fontfaceobserver';

const Spectral = new FontFaceObserver('Spectral');

async function unregisterServiceWorkers() {
  const registrations = await navigator.serviceWorker.getRegistrations();
  if (!registrations) return;
  for (let registration of registrations) {
    await registration.unregister();
  }
}

export default class Layout extends React.PureComponent {
  componentDidMount() {
    // TODO: Remove this after a while
    if ('serviceWorker' in navigator) {
      unregisterServiceWorkers();
    }

    Spectral.load();
  }

  render = () => this.props.children;
}

injectGlobal`
  @font-face {
    font-family: Spectral;
    font-style: normal;
    font-weight: 400;
    src: local("Spectral Regular"),
         local("Spectral-Regular"),
         url("https://fonts.gstatic.com/s/spectral/v4/rnCr-xNNww_2s0amA9M5knjsS_ul.woff2") format("woff2"),
         url("https://fonts.gstatic.com/s/spectral/v4/rnCr-xNNww_2s0amA9M5kn0.ttf") format("truetype");
    unicode-range: U0000-00ff, U0131, U0152-0153, U02bb-02bc, U02c6, U02da, U02dc, U2000-206f, U2074, U20ac, U2122, U2191, U2193, U2212, U2215, UFEFF, UFFFD;
  }

  @font-face {
    font-family: Spectral;
    font-style: normal;
    font-weight: 600;
    src: local("Spectral SemiBold"),
         local("Spectral-SemiBold"),
         url("https://fonts.gstatic.com/s/spectral/v4/rnCs-xNNww_2s0amA9vmtm3BafaPWnII.woff2") format("woff2"),
         url("https://fonts.gstatic.com/s/spectral/v4/rnCs-xNNww_2s0amA9vmtm3BafM.ttf") format("truetype");
    unicode-range: U0000-00ff, U0131, U0152-0153, U02bb-02bc, U02c6, U02da, U02dc, U2000-206f, U2074, U20ac, U2122, U2191, U2193, U2212, U2215, UFEFF, UFFFD;
  }

  html {
    height: 100%;
  }

  #___gatsby {
    height: 100%;

    > div {
      height: 100%;
    }
  }

  body {
    font-family: "Spectral", serif;
    font-size: 16px;
    font-weight: 400;
    height: 100%;
    line-height: 1.5rem;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  * {
    box-sizing: border-box;
    font-size: inherit;
    font-weight: inherit;
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }
`;
