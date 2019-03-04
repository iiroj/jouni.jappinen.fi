import { css } from "@emotion/core";
import { mix } from "polished";
import React from "react";

import { rautakymi } from "../styles";

const comingSoon = css({
  backgroundColor: mix(0.2, "white", rautakymi.colors.darkRed),
  fontSize: "0.8em",
  fontWeight: "600",
  left: 0,
  padding: "0.5rem 1rem",
  position: "absolute",
  textTransform: "uppercase",
  top: 0,
  transform: "translate(-0.5rem, 0.5rem)"
});

export default () => (
  <aside css={comingSoon}>
    <p>Tulossa pian</p>
  </aside>
);
