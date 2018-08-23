import React from 'react';
import { css } from 'react-emotion';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import Layout from '../components/Layout';

const microdata = JSON.stringify({
  '@context': 'http://schema.org',
  '@type': 'Person',
  name: 'Jouni Jäppinen',
  jobTitle: 'taiteilija',
  url: 'https://jouni.jappinen.fi',
  email: 'jouni@jappinen.fi',
  nationality: 'Finland',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'Finland',
    addressLocality: 'Loviisa'
  },
  alumniOf: 'Turun yliopisto'
});

const BREAKPOINT = '1023px';

const headerStyles = css`
  background: url('/sokerikko.jpg');
  background-position: 25% center;
  background-repeat: no-repeat;
  background-size: cover;
  color: rgb(255, 255, 255);
  height: 75%;
  overflow-y: hidden;
  position: relative;

  @media (min-width: ${BREAKPOINT}) {
    height: 100%;
    position: fixed;
    top: 0;
    width: 50%;
  }
`;

const headingStyles = css`
  left: 1rem;
  position: fixed;
  top: 50vh;
  transform: translateY(-100%);

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.5rem;
  }

  h2 {
    color: opacify($backColor, 0.4);
  }
`;

const captionStyles = css`
  bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 75%;
  margin-left: 0.5rem;
  position: absolute;
  right: 0.5rem;
  text-align: right;
`;

const mainStyles = css`
  position: relative;

  @media (min-width: ${BREAKPOINT}) {
    margin-left: 50%;
    width: 50%;
  }
`;

const aboutStyles = css`
  margin: 4rem auto;
  max-width: 40rem;
  padding: 0 1rem;

  p + p {
    margin-top: 0.5rem;
  }
`;

const projectsStyles = css`
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;

  li {
    box-sizing: border-box;
    height: 40vh;
    padding: 0.5rem;
    width: 100%;

    @media (min-width: 50rem) {
      width: 50%;
    }

    &:hover article {
      transform: scale(0.95);
      transform-origin: 50% 50%;
    }
  }
`;

const projectStyles = css`
  background-color: rgba(0, 0, 0, 0.05);
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
  color: rgb(255, 255, 255) !important;
  height: 100%;
  position: relative;
  transition: transform 0.2s ease-out;

  > div {
    left: 50%;
    position: absolute;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2), 0 0px 4px rgba(0, 0, 0, 0.4);
    top: 50%;
    transform: translate(-50%, -50%);
    width: 90%;

    h1 {
      font-size: 1.5rem;
      font-weight: 600;
    }
  }
`;

const pajanHamarastaStyles = css`
  ${projectStyles};
  background-image: url('/pajan-hamarasta.jpg');
`;

const ikuisetSepratStyles = css`
  ${projectStyles};
  background-image: url('/ikuiset-seprat.jpg');
  background-position: center;
`;

const rautakymiStyles = css`
  ${projectStyles};
  background-image: url('/rautakymi.jpg');
`;

const lovartStyles = css`
  ${projectStyles};
  background-image: url('/lovart.jpg');
`;

const articlesStyles = css`
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  li {
    box-sizing: border-box;
    padding: 1rem;
    width: 13rem;

    &:hover article {
      transform: scale(0.95);
      transform-origin: 50% 50%;
    }
  }
`;

const articleStyles = css`
  box-sizing: border-box;
  height: 100%;
  padding: 1rem;
  position: relative;
  transition: transform 0.2s ease-out;
  will-change: transform;

  h1 {
    font-size: inherit;
    text-align: center;
  }
`;

const coverStyles = css`
  background-color: rgba(255, 255, 2555, 0.05);
  background-position: center;
  background-size: cover;
  height: 0;
  margin: 0 auto 1rem auto;
  padding-bottom: 106.67%;
  width: 75%;
`;

const Rautakuona = css`
  ${coverStyles};
  background-image: url('/rautakymi-thumbnail.jpg');
`;

const Tammijarvi = css`
  ${coverStyles};
  background-image: url('/tammijarvi-thumbnail.jpg');
`;

const Straka = css`
  ${coverStyles};
  background-image: url('/stråka-thumbnail.jpg');
`;

const Anttijappinen = css`
  ${coverStyles};
  background-image: url('/antti-jappinen-thumbnail.jpg');
  background-size: cover;
`;

const linksStyles = css`
  ul li a {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    display: block;
    padding: 1rem 0;
    text-align: center;
    text-decoration: none;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`;

const Index = () => (
  <>
    <Helmet>
      <title>Jouni Jäppinen</title>
      <script type="application/ld+json">{microdata}</script>
    </Helmet>
    <header className={headerStyles}>
      <div className={headingStyles}>
        <h1>Jouni Jäppinen</h1>
        <h2>Taiteilija ja kultaseppä</h2>
      </div>
      <aside className={captionStyles}>
        <p>Image: Sugar cup, cast iron, sterling silver. Finnish Design 8 exhibition at Helsinki Design Museum 1991</p>
      </aside>
    </header>
    <main className={mainStyles}>
      <section className={aboutStyles}>
        <p>
          <span>Jouni Jäppinen</span> on loviisalainen taiteilija ja kultaseppä, joka aloitti työuransa porvoolaisessa
          sepänpajassa 1970-luvun alussa.
        </p>
        <p>
          Hän jatkoi metallialan perusopintojen jälkeen opintojaan Lahden kultaseppäkoulussa ja myöhemmin
          Taideteollisessa korkeakoulussa, kunnes hakeutui Tampereen ja Turun yliopistoihin opiskelemaan
          ammattikasvatusta, sosiologiaa ja kulttuurihistoriaa.
        </p>
        <p>
          Jäppinen on työskennellyt 1980-luvulta lähtien korutaiteilijana, heraldikkona, lavastajana, kansainvälisen
          taiteilijavaihdon tuottajana, ja tänään hänet tunnetaan myös rautakautisten menetelmien tutkijana ja
          tietokirjailijana.
        </p>
      </section>
      <ul className={projectsStyles}>
        <li>
          <Link to="/pajan-hamarasta/">
            <article className={pajanHamarastaStyles}>
              <div>
                <h1>Pajan hämärästä</h1>
                <h2>Sepän kulttuurihistoriaa</h2>
              </div>
            </article>
          </Link>
        </li>
        <li typeof="Book">
          <Link to="/ikuiset-seprat/">
            <article className={ikuisetSepratStyles}>
              <div>
                <h1>Ikuiset seprat</h1>
                <h2>Tytärsaarelaisten ja virolaisten suhteet ennen toista maailmansotaa</h2>
              </div>
            </article>
          </Link>
        </li>
        <li>
          <a href="https://www.rautakymi.fi">
            <article className={rautakymiStyles}>
              <div>
                <h1>Talonpoikia, seppiä, lohiylimyksiä</h1>
                <h2>Arkeologian harrastajien tutkielma Kymijokilaakson rautakautisesta asutuksesta</h2>
              </div>
            </article>
          </a>
        </li>
        <li>
          <a href="https://www.lovart.fi">
            <article className={lovartStyles}>
              <div>
                <h1>Loviisa Artists’ Studio</h1>
                <h2>Let’s work in peace</h2>
              </div>
            </article>
          </a>
        </li>
      </ul>
      <ul className={articlesStyles}>
        <li>
          <a href="/rautakuona.pdf">
            <article className={articleStyles}>
              <figure className={Rautakuona} role="presentation" alt="Kymijokisuiston rautakuona" />
              <h1>Kymijokisuiston rautakuona</h1>
            </article>
          </a>
        </li>
        <li>
          <a href="/tammijärvi.pdf">
            <article className={articleStyles}>
              <figure className={Tammijarvi} role="presentation" alt="Experimentel forskning vid Tammijärvi i Pyttis" />
              <h1>Experimentel forskning vid Tammijärvi i Pyttis</h1>
            </article>
          </a>
        </li>
        <li>
          <a href="/stråka.pdf">
            <article className={articleStyles}>
              <figure className={Straka} role="presentation" alt="Stråka Järnframställning" />
              <h1>Stråka Järnframställning</h1>
            </article>
          </a>
        </li>
        <li>
          <a href="/antti-jappinen.pdf">
            <article className={articleStyles}>
              <figure className={Anttijappinen} role="presentation" alt="Sotamies Antti Jäppinen" />
              <h1>Sotamies Antti Jäppinen</h1>
            </article>
          </a>
        </li>
      </ul>
      <footer>
        <nav className={linksStyles}>
          <ul>
            <li>
              <a href="/kirjoituksia.pdf" rel="prefetch">
                Kirjoituksia
              </a>
            </li>
            <li>
              <a href="mailto:Jouni Jäppinen <jouni@jappinen.fi>">Ota yhteyttä</a>
            </li>
            <li>
              <a href="https://www.finnishdesigners.fi/portfolio/jouni.jappinen" rel="external crossorigin prefetch">
                Ornamo
              </a>
            </li>
            <li>
              <a href="https://www.artists-o.fi" rel="external crossorigin prefetch">
                Taiteilijat O
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </main>
  </>
);

export default Index;
