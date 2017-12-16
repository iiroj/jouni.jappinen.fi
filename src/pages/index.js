import React, { Fragment } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import sokerikko from '../assets/sokerikko.jpg';
import pajanHämärästä from '../assets/pajan-hamarasta.jpg';
import ikuisetSeprat from '../assets/ikuiset-seprat.jpg';
import rautakymi from '../assets/rautakymi.jpg';
import rautakuona from '../assets/rautakuona.pdf';
import rautakymiThumbnail from '../assets/rautakymi-thumbnail.jpg';
import tammijärviThumbmail from '../assets/tammijarvi-thumbnail.jpg';
import stråkaThumbnail from '../assets/stråka-thumbnail.jpg';
import anttiJäppinenThumbnail from '../assets/antti-jappinen-thumbnail.jpg';
import lovart from '../assets/lovart.jpg';
import tammijärvi from '../assets/tammijärvi.pdf';
import stråka from '../assets/stråka.pdf';
import anttiJäppinen from '../assets/antti-jappinen.pdf';
import kirjoituksia from '../assets/kirjoituksia.pdf';

const microdata = {
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
    addressLocality: 'Loviisa',
  },
  alumniOf: 'Turun yliopisto',
};

const Header = styled.header`
  background: url(${sokerikko});
  background-position: 25% center;
  background-repeat: no-repeat;
  background-size: cover;
  color: rgb(255, 255, 255);
  height: 100%;
  overflow-y: hidden;
  position: relative;
  z-index: -1;

  @media (min-width: 100rem) {
    position: fixed;
    top: 0;
    width: 50%;
  }
`;

const Heading = styled.div`
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

const Caption = styled.aside`
  bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 75%;
  margin-left: 0.5rem;
  position: absolute;
  right: 0.5rem;
  text-align: right;
`;

const Main = styled.main`
  position: relative;

  @media (min-width: 100rem) {
    margin-left: 50%;
    width: 50%;
  }
`;

const About = styled.section`
  margin: 4rem auto;
  max-width: 40rem;
  padding: 0 1rem;

  p + p {
    margin-top: 0.5rem;
  }
`;

const Projects = styled.ul`
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

const Project = styled.article`
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

const PajanHamarasta = Project.extend`
  background-image: url(${pajanHämärästä});
`;

const IkuisetSeprat = Project.extend`
  background-image: url(${ikuisetSeprat});
  background-position: center;
`;

const Rautakymi = Project.extend`
  background-image: url(${rautakymi});
`;

const LovArt = Project.extend`
  background-image: url(${lovart});
`;

const Articles = styled.ul`
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

const Article = styled.article`
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

const Cover = styled.div`
  background-color: rgba(255, 255, 2555, 0.05);
  background-position: center;
  background-size: cover;
  height: 0;
  margin: 0 auto 1rem auto;
  padding-bottom: 106.67%;
  width: 75%;
`;

const Rautakuona = Cover.extend`
  background-image: url(${rautakymiThumbnail});
`;

const Tammijarvi = Cover.extend`
  background-image: url(${tammijärviThumbmail});
`;

const Straka = Cover.extend`
  background-image: url(${stråkaThumbnail});
`;

const Anttijappinen = Cover.extend`
  composes: cover;
  background-image: url(${anttiJäppinenThumbnail});
`;

const Links = styled.nav`
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
  <Fragment>
    <Helmet
      title="Jouni Jäppinen"
      script={[
        {
          type: 'application/ld+json',
          innerHTML: `${JSON.stringify(microdata)}`,
        },
      ]}
    />
    <Header>
      <Heading>
        <h1>Jouni Jäppinen</h1>
        <h2>Taiteilija ja kultaseppä</h2>
      </Heading>
      <Caption>
        <p>Image: Sugar cup, cast iron, sterling silver. Finnish Design 8 exhibition at Helsinki Design Museum 1991</p>
      </Caption>
    </Header>
    <Main>
      <About>
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
      </About>
      <Projects>
        <li>
          <Link to="/pajan-hamarasta/">
            <PajanHamarasta>
              <div>
                <h1>Pajan hämärästä</h1>
                <h2>Sepän kulttuurihistoriaa</h2>
              </div>
            </PajanHamarasta>
          </Link>
        </li>
        <li typeof="Book">
          <Link to="/ikuiset-seprat/">
            <IkuisetSeprat>
              <div>
                <h1>Ikuiset seprat</h1>
                <h2>Tytärsaarelaisten ja virolaisten suhteet ennen toista maailmansotaa</h2>
              </div>
            </IkuisetSeprat>
          </Link>
        </li>
        <li>
          <a href="https://www.rautakymi.fi">
            <Rautakymi>
              <div>
                <h1>Talonpoikia, seppiä, lohiylimyksiä</h1>
                <h2>Arkeologian harrastajien tutkielma Kymijokilaakson rautakautisesta asutuksesta</h2>
              </div>
            </Rautakymi>
          </a>
        </li>
        <li>
          <a href="https://www.lovart.fi">
            <LovArt>
              <div>
                <h1>Loviisa Artists’ Studio</h1>
                <h2>Let’s work in peace</h2>
              </div>
            </LovArt>
          </a>
        </li>
      </Projects>
      <Articles>
        <li>
          <a href={rautakuona}>
            <Article>
              <Rautakuona />
              <h1>Kymijokisuiston rautakuona</h1>
            </Article>
          </a>
        </li>
        <li>
          <a href={tammijärvi}>
            <Article>
              <Tammijarvi />
              <h1>Experimentel forskning vid Tammijärvi i Pyttis</h1>
            </Article>
          </a>
        </li>
        <li>
          <a href={stråka}>
            <Article>
              <Straka />
              <h1>Stråka Järnframställning</h1>
            </Article>
          </a>
        </li>
        <li>
          <a href={anttiJäppinen}>
            <Article>
              <Anttijappinen />
              <h1>Sotamies Antti Jäppinen</h1>
            </Article>
          </a>
        </li>
      </Articles>
      <footer>
        <Links>
          <ul>
            <li>
              <a href={kirjoituksia} rel="prefetch">
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
        </Links>
      </footer>
    </Main>
  </Fragment>
);

export default Index;
