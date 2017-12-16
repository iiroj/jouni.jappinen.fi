import React from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';
import reset from 'css-wipe/js';

injectGlobal`
${reset}

html, body, #___gatsby {
  height: 100%;
}

body {
    font-family: 'Spectral', serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5rem;
    margin: 0;
}

a {
	color: inherit;
	text-decoration: inherit;
}
`;

const DefaultLayout = ({ children }) => children();

DefaultLayout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default DefaultLayout;
