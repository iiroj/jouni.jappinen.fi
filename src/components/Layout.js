import { Global } from "@emotion/core";
import FontFaceObserver from "fontfaceobserver";
import React, { useEffect } from "react";

const Reset = () => (
  <Global
    styles={[
      {
        "@font-face": {
          fontFamily: "Spectral",
          fontStyle: "normal",
          fontWeight: "400",
          src:
            'local("Spectral Regular"), local("Spectral-Regular"), url("https://fonts.gstatic.com/s/spectral/v4/rnCr-xNNww_2s0amA9M5knjsS_ul.woff2") format("woff2"), url("https://fonts.gstatic.com/s/spectral/v4/rnCr-xNNww_2s0amA9M5kn0.ttf") format("truetype")',
          unicodeRange:
            "U0000-00ff, U0131, U0152-0153, U02bb-02bc, U02c6, U02da, U02dc, U2000-206f, U2074, U20ac, U2122, U2191, U2193, U2212, U2215, UFEFF, UFFFD"
        }
      },
      {
        "@font-face": {
          fontFamily: "Spectral",
          fontStyle: "normal",
          fontWeight: "600",
          src:
            'local("Spectral SemiBold"), local("Spectral-SemiBold"), url("https://fonts.gstatic.com/s/spectral/v4/rnCs-xNNww_2s0amA9vmtm3BafaPWnII.woff2") format("woff2"), url("https://fonts.gstatic.com/s/spectral/v4/rnCs-xNNww_2s0amA9vmtm3BafM.ttf") format("truetype")',
          unicodeRange:
            "U0000-00ff, U0131, U0152-0153, U02bb-02bc, U02c6, U02da, U02dc, U2000-206f, U2074, U20ac, U2122, U2191, U2193, U2212, U2215, UFEFF, UFFFD"
        }
      },
      {
        html: {
          height: "100%"
        },

        "#___gatsby": {
          height: "100%",

          "> div": {
            height: "100%"
          }
        },

        body: {
          fontFamily: '"Spectral", serif',
          fontSize: 16,
          fontWeight: "400",
          height: "100%",
          lineHeight: "1.5rem",
          margin: 0
        },

        a: {
          color: "inherit",
          textDecoration: "inherit"
        },

        "*": {
          boxSizing: "border-box",
          fontSize: "inherit",
          fontWeight: "inherit",
          margin: 0,
          padding: 0
        },

        ul: {
          listStyle: "none"
        }
      }
    ]}
  />
);

const Spectral400 = new FontFaceObserver("Spectral", {
  style: "normal",
  weight: 400
});

const Spectral600 = new FontFaceObserver("Spectral", {
  style: "normal",
  weight: 600
});

export default ({ children }) => {
  useEffect(() => {
    Promise.all([Spectral400.load(), Spectral600.load()]).catch();
  }, []);

  return (
    <>
      <Reset />
      {children}
    </>
  );
};
