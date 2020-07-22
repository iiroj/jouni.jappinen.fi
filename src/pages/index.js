import { css } from "@emotion/core";
import Link from "next/link";
import React from "react";
import { Helmet } from "react-helmet-async";

import { rautakymi } from "../styles";

const microdata = JSON.stringify({
  "@context": "http://schema.org",
  "@type": "Person",
  name: "Jouni Jäppinen",
  jobTitle: "taiteilija",
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

const sormusBase64 =
  "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIADcATwMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcEBQECAwj/2gAIAQEAAAAA+VAAM/BOAXlBd3i1sC5KekM8p8G1lOwgWuA9+vkAA//EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAgBAhAAAAADOpSUD//EABUBAQEAAAAAAAAAAAAAAAAAAAAD/9oACAEDEAAAAAEqgA//xAAqEAACAgIBAgQFBQAAAAAAAAABAgMEBREGACESEzAxBxQgQVEiMmWBs//aAAgBAQABPwD1auPlsxTSiSJEjRmJdwNlRvQHvs+w9Lg2MgfgWSywcx2sfYvSwsuu7pBE6b6i5tIbbWrmKpWpXZWd5U8wsyjWyJfGOsFlOL5nNYyjbwEa/MW44e2tMZn8Oz5Pk6118UKEtDOU67+HwimTEFjSMCMzy60sYUfXwfPVq/DsrQsQbi+e3K5cIjrZjCmH87KxN06FHZDrakjsQR2/BHXDjrl3HD/K1P8AUdfGx4jyyqiSKTHjYlcA90Jd20frxOQWlPKJYw9eePyrC67mPxB9qfsylQR1d4JlnQWsXE+TqSd4rFNDMCPxIqbMbjfdW6xvHRxSbH57OzqhgMNmrj0Ypank/fGCHX9Ef3Z+srlLuXyNm/dl8yed/E7ehXs2asyzV55IpF3p42KsN9jojqWaaZzJLIzufdmJJP8AZ9f/xAAaEQEAAgMBAAAAAAAAAAAAAAABABECIDAx/9oACAECAQE/ANslCyXDw6f/xAAdEQABAgcAAAAAAAAAAAAAAAABAAISEyAhMGGB/9oACAEDAQE/AKoQ6xUlmx05f//Z')";
const sormus = "url(sormus.jpg)";
const sormus2x = "url(sormus@2x.jpg)";

const headerStyles = css({
  backgroundImage: `${sormus}, ${sormusBase64}`,
  backgroundSize: "cover",
  backgroundPosition: "0% 50%",
  color: "white",
  overflowY: "hidden",
  position: "relative",

  ...tabletSize({
    backgroundImage: `${sormus2x},${sormus}, ${sormusBase64}`,
    backgroundPosition: "33% 50%",
    height: "100%",
    position: "fixed",
    top: 0,
    width: "50%",
  }),
});

const headingStyles = css({
  marginLeft: "1rem",
  padding: "10rem 0",
  top: "50%",

  h1: {
    fontSize: "1.5rem",
    fontWeight: 600,
    lineHeight: "1.5rem",
  },

  ...tabletSize({
    padding: 0,
    position: "fixed",
    transform: "translateY(-100%)",
  }),
});

const captionStyles = css({
  bottom: "0.5rem",
  color: "hsl(0, 0%, 60%)",
  fontSize: "0.75em",
  lineHeight: "1rem",
  margin: "0.5rem",

  ...tabletSize({
    position: "absolute",
  }),
});

const mainStyles = css({
  position: "relative",

  ...tabletSize({
    marginLeft: "50%",
    width: "50%",
  }),
});

const aboutStyles = css({
  margin: "4rem auto",
  maxWidth: "40rem",
  padding: "0 1rem",

  "p + p": {
    marginTop: "0.5rem",
  },
});

const projectsStyles = css({
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

const projectStyles = css({
  backgroundColor: "rgba(0, 0, 0, 0.05)",
  backgroundPosition: "center",
  backgroundSize: "cover",
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

    h1: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
  },
});

const rautakymiBookStyles = css(projectStyles, {
  backgroundColor: rautakymi.colors.darkRed,
  backgroundImage: "url(/rautakymi-book-cover.png)",
  backgroundSize: "cover",
});

const pajanHamarastaStyles = css(projectStyles, {
  backgroundImage: "url(/pajan-hamarasta.jpg)",
});

const ikuisetSepratStyles = css(projectStyles, {
  backgroundImage: "url(/ikuiset-seprat.jpg)",
  backgroundPosition: "center",
});

const articlesStyles = css({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  width: "100%",

  li: {
    boxSizing: "border-box",
    flex: "0 1 15rem",
    padding: "1rem",

    "&:hover article": {
      transform: "scale(0.95)",
      transformOrigin: "50% 50%",
    },
  },
});

const articleStyles = css({
  boxSizing: "border-box",
  height: "100%",
  padding: "1rem",
  position: "relative",
  transition: "transform 0.2s ease-out",
  willChange: "transform",

  h1: {
    fontSize: "inherit",
    textAlign: "center",
  },
});

const coverStyles = css({
  backgroundPosition: "center",
  backgroundSize: "cover",
  height: 0,
  margin: "0 auto 1rem auto",
  paddingBottom: "106.67%",
  width: "75%",
});

const viirankoski = css(coverStyles, {
  backgroundImage: "url(/viirankosken-vyokoukku-thumbnail.jpg)",
});

const rautakuona = css(coverStyles, {
  backgroundImage: "url(/rautakymi-thumbnail.jpg)",
});

const tammijarvi = css(coverStyles, {
  backgroundImage: "url(/tammijarvi-thumbnail.jpg)",
});

const straka = css(coverStyles, {
  backgroundImage: "url(/straka-thumbnail.jpg)",
});

const anttijappinen = css(coverStyles, {
  backgroundImage: "url(/antti-jappinen-thumbnail.jpg)",
  backgroundSize: "cover",
});

const linksStyles = css({
  borderTop: "1px solid rgba(0, 0, 0, 0.1)",
  display: "block",
  padding: "1rem 0",
  textAlign: "center",
  textDecoration: "none",

  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
});

export default ({ data }) => (
  <>
    <Helmet>
      <title>Jouni Jäppinen</title>
      <script type="application/ld+json">{microdata}</script>
    </Helmet>

    <header css={headerStyles}>
      <div css={headingStyles}>
        <h1>Jouni Jäppinen</h1>
        <h2>Taiteilija ja kultaseppä</h2>
      </div>

      <figure css={captionStyles}>
        <figcaption>
          <p>
            Image: Ring, sterling silver & colored titanium. Made in single
            pieces at the Strömfors atelier from 1986 to1991.
          </p>
          <p>
            The Alice and Louis Koch Collection exhibition in Swiss National
            Museum Zurich, Switzerland
          </p>
        </figcaption>
      </figure>
    </header>

    <div css={mainStyles}>
      <section css={aboutStyles}>
        <p>
          <span>Jouni Jäppinen</span> on loviisalainen taiteilija ja kultaseppä,
          joka aloitti työuransa porvoolaisessa sepänpajassa 1970-luvun alussa.
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
      </section>

      <ul css={projectsStyles}>
        <li>
          <Link href="/rautakymi/">
            <a>
              <article css={rautakymiBookStyles}>
                <div css={headingStyles}>
                  <h1>Rautakymi</h1>
                  <h2>Talonpoikia, Seppiä, Lohiylimyksiä</h2>
                </div>
              </article>
            </a>
          </Link>
        </li>

        <li>
          <Link href="/pajan-hamarasta/">
            <a>
              <article css={pajanHamarastaStyles}>
                <div css={headingStyles}>
                  <h1>Pajan hämärästä</h1>
                  <h2>Sepän kulttuurihistoriaa</h2>
                </div>
              </article>
            </a>
          </Link>
        </li>

        <li typeof="Book">
          <Link href="/ikuiset-seprat/">
            <a>
              <article css={ikuisetSepratStyles}>
                <div css={headingStyles}>
                  <h1>Ikuiset seprat</h1>
                  <h2>
                    Tytärsaarelaisten ja virolaisten suhteet ennen toista
                    maailmansotaa
                  </h2>
                </div>
              </article>
            </a>
          </Link>
        </li>
      </ul>

      <ul css={articlesStyles}>
        <li>
          <a href="/viirankosken-vyokoukku.pdf">
            <article css={articleStyles}>
              <figure
                alt="Viirankosken vyökoukku"
                css={viirankoski}
                role="img"
              />
              <h1>Viirankosken vyökoukku</h1>
            </article>
          </a>
        </li>

        <li>
          <a href="/rautakuona.pdf">
            <article css={articleStyles}>
              <figure
                alt="Kymijokisuiston rautakuona"
                css={rautakuona}
                role="img"
              />
              <h1>Kymijokisuiston rautakuona</h1>
            </article>
          </a>
        </li>

        <li>
          <a href="/tammijarvi.pdf">
            <article css={articleStyles}>
              <figure
                alt="Experimentel forskning vid Tammijärvi i Pyttis"
                css={tammijarvi}
                role="img"
              />
              <h1>Experimentel forskning vid Tammijärvi i Pyttis</h1>
            </article>
          </a>
        </li>

        <li>
          <a href="/straka.pdf">
            <article css={articleStyles}>
              <figure alt="Stråka Järnframställning" css={straka} role="img" />
              <h1>Stråka Järnframställning</h1>
            </article>
          </a>
        </li>

        <li>
          <a href="/antti-jappinen.pdf">
            <article css={articleStyles}>
              <figure
                alt="Sotamies Antti Jäppinen"
                css={anttijappinen}
                role="img"
              />
              <h1>Sotamies Antti Jäppinen</h1>
            </article>
          </a>
        </li>
      </ul>

      <footer>
        <nav>
          <ul>
            <li>
              <a css={linksStyles} href="/kirjoituksia.pdf">
                Kirjoituksia
              </a>
            </li>

            <li>
              <a
                css={linksStyles}
                href="mailto:Jouni Jäppinen <jouni@jappinen.fi>"
              >
                Ota yhteyttä
              </a>
            </li>

            <li>
              <a
                css={linksStyles}
                href="https://www.finnishdesigners.fi/portfolio/jouni.jappinen"
                rel="external crossorigin prefetch"
              >
                Ornamo
              </a>
            </li>

            <li>
              <a
                css={linksStyles}
                href="https://www.artists-o.fi"
                rel="external crossorigin prefetch"
              >
                Taiteilijat O
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  </>
);
