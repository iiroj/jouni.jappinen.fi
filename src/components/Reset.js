import { Global } from "@emotion/core";
import React from "react";

const Reset = () => (
  <Global
    styles={[
      {
        html: {
          height: "100%",
          fontFamily: "Spectral",
        },

        "#___gatsby": {
          height: "100%",

          "> div": {
            height: "100%",
          },
        },

        body: {
          fontSize: 16,
          fontWeight: "400",
          height: "100%",
          lineHeight: "1.5rem",
          margin: 0,
        },

        a: {
          color: "inherit",
          textDecoration: "inherit",
        },

        "*": {
          boxSizing: "border-box",
          fontSize: "inherit",
          fontWeight: "inherit",
          margin: 0,
          padding: 0,
        },

        ul: {
          listStyle: "none",
        },
      },
    ]}
  />
);

export default Reset;
