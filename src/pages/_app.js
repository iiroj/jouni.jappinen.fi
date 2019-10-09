import NextApp, { Container } from "next/app";
import { HelmetProvider } from "react-helmet-async";
import React from "react";

import Layout from "../components/Layout";

export default class App extends NextApp {
  constructor(props) {
    super(props);
    this.helmetContext = {};
  }

  render() {
    const { Component } = this.props;

    return (
      <Container>
        <HelmetProvider context={this.helmetContext}>
          <Layout>
            <Component helmetContext={this.helmetContext} />
          </Layout>
        </HelmetProvider>
      </Container>
    );
  }
}
