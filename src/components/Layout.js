import { Global } from "@emotion/core";
import FontFaceObserver from "fontfaceobserver";
import { Helmet } from "react-helmet-async";
import React, { useEffect } from "react";

import Main from "./Main";

const Reset = () => (
  <Global
    styles={[
      {
        html: {
          height: "100%",
          fontFamily: "serif",

          "&.fonts-loaded": {
            fontFamily: "Spectral"
          }
        },

        "#___gatsby": {
          height: "100%",

          "> div": {
            height: "100%"
          }
        },

        body: {
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

const fontUrl = "https://fonts.googleapis.com/css?family=Spectral:400,600";

export default ({ children }) => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = fontUrl;
    document.head.appendChild(link);

    Promise.all([Spectral400.load(), Spectral600.load()])
      .then(() => {
        document.documentElement.classList.add("fonts-loaded");
      })
      .catch();
  }, []);

  return (
    <>
      <Helmet>
        <html lang="fi" />
        <link href={fontUrl} rel="preload" as="style" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Helmet>

      <Reset />

      <Main>{children}</Main>
    </>
  );
};
