import { Link as RemixLink } from "@remix-run/react";
import React from "react";
import styled from "styled-components";

import { HTML_CACHE_CONTROL_HEADER, SECURITY_HEADERS } from "../headers";
import { rautakymi } from "../styles";

export const headers = () => ({
  ...SECURITY_HEADERS,
  ...HTML_CACHE_CONTROL_HEADER,
});

export const meta = () => [
  {
    title: "Jouni Jäppinen",
  },
];

const microdata = JSON.stringify({
  "@context": "http://schema.org",
  "@type": "Person",
  name: "Jouni Jäppinen",
  jobTitle: "FM, kultaseppä",
  url: "https://jouni.jappinen.fi",
  email: "jouni@jappinen.fi",
  nationality: "Finland",
  address: {
    "@type": "PostalAddress",
    addressCountry: "Finland",
    addressLocality: "Loviisa",
  },
  alumniOf: "Turun yliopisto",
});

const BREAKPOINT = "1023px";
const minWidth = (args) => (styleObject) => ({
  [`@media (min-width: ${args})`]: styleObject,
});
const tabletSize = minWidth(BREAKPOINT);

const Header = styled.header({
  color: "white",
  flexShrink: 0,
  overflowY: "hidden",
  position: "relative",

  ...tabletSize({
    height: "100%",
    position: "fixed",
    top: 0,
    width: "50%",
  }),
});

const Heading = styled.div({
  marginLeft: "1rem",
  position: "absolute",
  top: "50%",
  transform: "translateY(-100%)",

  h1: {
    fontSize: "1.5rem",
    fontWeight: 600,
    lineHeight: "1.5rem",
  },

  ...tabletSize({
    padding: 0,
    position: "fixed",
  }),
});

const Figure = styled.figure({
  position: "relative",

  "&, img": {
    height: "100%",
    objectFit: "cover",
    objectPosition: "0% 50%",
    width: "100%",
    top: 0,
    left: 0,

    ...tabletSize({
      objectPosition: "33% 50%",
    }),
  },
});

const Caption = styled.figcaption({
  bottom: "0.5rem",
  color: "hsl(0, 0%, 60%)",
  fontSize: "0.75em",
  lineHeight: "1rem",
  margin: "0.5rem",
  position: "absolute",
});

const Main = styled.main({
  position: "relative",

  ...tabletSize({
    marginLeft: "50%",
    width: "50%",
  }),
});

const About = styled.section({
  margin: "4rem auto",
  maxWidth: "40rem",
  padding: "0 1rem",

  "p + p": {
    marginTop: "0.5rem",
  },
});

const Projects = styled.ul({
  display: "flex",
  flexWrap: "wrap",
  padding: "0.5rem",

  li: {
    boxSizing: "border-box",
    height: "40vh",
    padding: "0.5rem",
    width: "100%",

    ...minWidth("50rem")({
      width: "50%",

      "&:first-child": {
        width: "100%",
      },
    }),

    "&:hover article": {
      transform: "scale(0.95)",
      transformOrigin: "50% 50%",
    },
  },
});

const Project = styled.article({
  boxSizing: "border-box",
  color: "white !important",
  height: "100%",
  position: "relative",
  transition: "transform 0.2s ease-out",

  "> div": {
    left: "50%",
    position: "absolute",
    textShadow: "0 1px 0 rgba(0, 0, 0, 0.2), 0 0px 4px rgba(0, 0, 0, 0.4)",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    zIndex: 2,

    h1: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
  },

  img: {
    height: "100%",
    left: 0,
    objectFit: "cover",
    position: "absolute",
    top: 0,
    width: "100%",
  },

  "&::before": {
    background: "rgba(0, 0, 0, 0.4)",
    bottom: 0,
    content: '""',
    display: "block",
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 1,
  },
});

const RautakymiBook = styled(Project)({
  backgroundColor: rautakymi.colors.darkRed,
});

const Articles = styled.ul({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  margin: "0 auto",
  maxWidth: "42rem",
  width: "100%",

  li: {
    boxSizing: "border-box",
    flex: "0 1 12rem",
    padding: "1rem",

    "&:hover article": {
      transform: "scale(0.95)",
      transformOrigin: "50% 50%",
    },

    ...tabletSize({
      flexBasis: "14rem",
    }),
  },
});

const Article = styled.article({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  padding: "1rem",
  position: "relative",
  transition: "transform 0.2s ease-out",
  willChange: "transform",

  picture: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
  },

  img: {
    marginBottom: "1rem",
    objectFit: "contain",
    objectPosition: "top center",
    position: "relative",
    width: "75%",
  },

  h1: {
    fontSize: "inherit",
    textAlign: "center",
  },
});

const Tammijarvi = styled(Article)({
  img: {
    objectPosition: "bottom center",
  },
});

const Link = styled(RemixLink)({
  borderTop: "1px solid rgba(0, 0, 0, 0.1)",
  display: "block",
  padding: "1rem 0",
  textAlign: "center",
  textDecoration: "none",

  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
});

const Root = () => (
  <>
    <Header>
      <Figure>
        <picture>
          <source
            srcSet="sormus.webp 1x, sormus@2x.webp 2x"
            type="image/webp"
          />
          <source srcSet="sormus.jpg 1x, sormus@2x.jpg 2x" type="image/jpeg" />
          <img alt="Rautakymi" src="/sormus@2x.jpg" />
        </picture>

        <Caption>
          Image: Ring, sterling silver & colored titanium. Made in single pieces
          at the Strömfors atelier from 1986 to 1991. The Alice and Louis Koch
          Collection in the Swiss National Museum, Zurich (part of the museum
          collection on permanent display).
        </Caption>
      </Figure>

      <Heading>
        <h1>Jouni Jäppinen</h1>
        <h2>Taiteilija ja kultaseppä</h2>
      </Heading>
    </Header>

    <Main>
      <About>
        <p>
          <span>Jouni Jäppinen</span> on loviisalainen taiteilija (FM,
          kultaseppä), joka aloitti työuransa porvoolaisessa sepänpajassa
          1970-luvun alussa.
        </p>
        <p>
          Hän jatkoi metallialan perusopintojen jälkeen opintojaan Lahden
          kultaseppäkoulussa ja myöhemmin Taideteollisessa korkeakoulussa,
          kunnes hakeutui Tampereen ja Turun yliopistoihin opiskelemaan
          ammattikasvatusta, sosiologiaa ja kulttuurihistoriaa.
        </p>
        <p>
          Jäppinen on työskennellyt 1980-luvulta lähtien korutaiteilijana,
          heraldikkona, lavastajana, kansainvälisen taiteilijavaihdon
          tuottajana, ja tänään hänet tunnetaan myös rautakautisten menetelmien
          tutkijana ja tietokirjailijana.
        </p>
      </About>

      <Projects>
        <li>
          <RemixLink to="/rautakymi">
            <RautakymiBook>
              <picture>
                <source srcSet="/rautakymi-book-cover.webp" type="image/webp" />
                <img alt="Rautakymi" src="/rautakymi-book-cover.png" />
              </picture>
              <Heading>
                <h1>Rautakymi</h1>
                <h2>Talonpoikia, Seppiä, Lohiylimyksiä</h2>
              </Heading>
            </RautakymiBook>
          </RemixLink>
        </li>

        <li>
          <RemixLink to="/pajan-hamarasta">
            <Project>
              <picture>
                <source srcSet="/pajan-hamarasta.webp" type="image/webp" />
                <img alt="Pajan hämärästä" src="/pajan-hamarasta.jpg" />
              </picture>
              <Heading>
                <h1>Pajan hämärästä</h1>
                <h2>Sepän kulttuurihistoriaa</h2>
              </Heading>
            </Project>
          </RemixLink>
        </li>

        <li>
          <RemixLink to="/ikuiset-seprat">
            <Project>
              <picture>
                <source srcSet="/ikuiset-seprat.webp" type="image/webp" />
                <img alt="Ikuiset seprat" src="/ikuiset-seprat.jpg" />
              </picture>
              <Heading>
                <h1>Ikuiset seprat</h1>
                <h2>
                  Tytärsaarelaisten ja virolaisten suhteet ennen toista
                  maailmansotaa
                </h2>
              </Heading>
            </Project>
          </RemixLink>
        </li>
      </Projects>

      <Articles>
        <li>
          <a href="/documents/viirankosken-vyokoukku.pdf">
            <Article>
              <picture>
                <source
                  srcSet="/viirankosken-vyokoukku-thumbnail.webp"
                  type="image/webp"
                />
                <img
                  alt="Viirankosken vyökoukku"
                  src="/viirankosken-vyokoukku-thumbnail.jpg"
                />
              </picture>
              <h1>Viirankosken vyökoukku</h1>
            </Article>
          </a>
        </li>

        <li>
          <a href="/documents/rautakuona.pdf">
            <Article>
              <picture>
                <source srcSet="/rautakymi-thumbnail.webp" type="image/webp" />
                <img
                  alt="Viirankosken vyökoukku"
                  src="/rautakymi-thumbnail.jpg"
                />
              </picture>
              <h1>Kymijokisuiston rautakuona</h1>
            </Article>
          </a>
        </li>

        <li>
          <a href="/documents/tammijarvi.pdf">
            <Tammijarvi>
              <picture>
                <source srcSet="/tammijarvi-thumbnail.webp" type="image/webp" />
                <img
                  alt="Experimentel forskning vid Tammijärvi i Pyttis"
                  src="/tammijarvi-thumbnail.jpg"
                />
              </picture>
              <h1>Experimentel forskning vid Tammijärvi i Pyttis</h1>
            </Tammijarvi>
          </a>
        </li>

        <li>
          <a href="/documents/Loviisa-Artists-Studio-1995-2021.pdf">
            <Article>
              <picture>
                <source srcSet="/essinveistos.webp" type="image/webp" />
                <img
                  alt="Loviisa Artists’ Studio 1995–2021"
                  src="/essinveistos.jpg"
                />
              </picture>
              <h1>Loviisa Artists’ Studio 1995–2021</h1>
            </Article>
          </a>
        </li>

        <li>
          <a href="/documents/straka.pdf">
            <Article>
              <picture>
                <source srcSet="/straka-thumbnail.webp" type="image/webp" />
                <img
                  alt="Stråka Järnframställning"
                  src="/straka-thumbnail.jpg"
                />
              </picture>
              <h1>Stråka Järnframställning</h1>
            </Article>
          </a>
        </li>

        <li>
          <a href="/documents/antti-jappinen.pdf">
            <Article>
              <picture>
                <source
                  srcSet="/antti-jappinen-thumbnail.webp"
                  type="image/webp"
                />
                <img
                  alt="Sotamies Antti Jäppinen"
                  src="/antti-jappinen-thumbnail.jpg"
                />
              </picture>
              <h1>Sotamies Antti Jäppinen</h1>
            </Article>
          </a>
        </li>
      </Articles>

      <footer>
        <nav>
          <ul>
            <li>
              <Link to="/documents/kirjoituksia.pdf">Kirjoituksia</Link>
            </li>

            <li>
              <Link to="mailto:Jouni Jäppinen <jouni@jappinen.fi>">
                Ota yhteyttä
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </Main>

    <script
      /** rome-ignore lint/security/noDangerouslySetInnerHtml: static JSON  */
      dangerouslySetInnerHTML={{ __html: microdata }}
      type="application/ld+json"
    />
  </>
);

export default Root;
