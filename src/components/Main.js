import React from "react";
import { css } from "@emotion/core";

const main = css({
  display: "flex",
  flexDirection: "column",
  minHeight: "100%"
});

export default ({ children }) => <main css={main}>{children}</main>;
