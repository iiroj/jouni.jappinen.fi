import React from "react";
import PropTypes from "prop-types";
import styled, { injectGlobal } from "styled-components";
import reset from "css-wipe/js";

injectGlobal`
${reset}

:root {
	height: 100%;
	margin: 0;
	padding: 0;
}

body {
    font-family: 'Noto Serif', serif;
    font-size: 16px;
    font-smoothing: antialiased;
    font-weight: 400;
    line-height: 1.5rem;
    margin: 0;
}

a {
	color: inherit;
	text-decoration: inherit;
}
`;

export default function DefaultLayout(props) {
  const { children } = props;

  return (
    <div>
      {children()}
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.func.isRequired
};
