import React from 'react';
import { css } from 'react-emotion';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import Layout from '../components/Layout';

const container = css`
  background-color: rgb(26, 25, 25);
  color: white;
`;

const image = css`
  background: url('/pajan-hamarasta/cover.jpg');
  background-position: 50% 50%;
  background-size: cover;
  height: 25vh;
`;

const header = css`
  background-color: rgb(61, 19, 15);
  padding: 2rem;
  text-align: center;

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.5rem;
  }
`;

const section = css`
  background-color: rgb(61, 19, 15);
  padding-bottom: 1rem;

  p {
    margin: 0 auto 1rem auto;
    max-width: 50rem;
    padding: 0 1rem;
  }
`;

const link = css`
  color: rgb(161, 42, 38);
  display: block;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  padding: 2rem;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const footer = css`
  margin: 0 auto;
  max-width: 50rem;
  padding: 1rem 0 4rem 0;
  text-align: center;

  p {
    margin-bottom: 0.5rem;
  }
`;

const Pajanhamarasta = () => (
  <Layout>
    <main className={container}>
      <Helmet>
        <title>Pajan hämärästä – Jouni Jäppinen</title>
      </Helmet>
      <div className={image} role="presentation" alt="Pajan hämärstä" />
      <header className={header}>
        <h1>Pajan hämärästä</h1>
        <h2>Sepän kulttuurihistoriaa</h2>
      </header>
      <section className={section}>
        <p>
          Vanhan sanonnan mukaan seppä on taitava henkilö niin aineen kuin hengenkin alalla. Kirja luo katsauksen
          sepänalan esihistoriaan sekä tarinoihin kotimaamme sepistä, joita on onnekkaasti säilynyt jälkipolville.
          Muistitiedon mukaan seppien joukkoon mahtui monenlaisia persoonallisuuksia ja osa heistä toimi pajatyön ohella
          monenlaisissa muissakin tehtävissä, kuten kylänvanhimpina, poliitikkoina, parantajina, verenlaskijoina, tai
          -seisauttajina, näkijöinä, noitina, hautausurakoitsijoina, soitinrakentajina, puoskareina ja jopa kätilöinä.
        </p>
        <p>
          Osa sepistä harrasti aktiivisesti musiikkia rakentaen itse harmonnit, mandoliinit, kitarat, viulut ja
          kanteleet, esiintyen monenmoisissa kokoonpanoissa yli pitäjärajojen. Jotkut sepät saivan nimeä synnynnäisinä
          jutunkertojina, joiden kaskut ovat periytyneet tähän päivään asti. Huumoripitoiset seppäjutut toivat vaihtelua
          pajan rankkaan arkipäivään.
        </p>
        <p>
          Seppien joukkoon mahtui myös originelleja, jotka halveksivat avoimesti virkavaltaa, pappeja, rikasta säätyä.
        </p>
        <p>
          Yhteisön arvomaailman ja normien halveksiminen tuli esille mitä moninaisimimpien tempausten muodossa. Elämää
          väritti ennen vanhaan taikausko, noituus ja magia ja sepillä oli niiden harjoittamisessa oma tärkeä roolinsa,
          ensisijaisesti pajaelinkeinon edistäjänä, joka lienee vanhaa perua rautakaudelta. Taikuuden harjoittaminen
          pajassa pönkitti sepän asemaa kyläyhteisössä ja samalla se ylläpiti ammoisista ajoista asti periytynyttä
          sankarimyyttiä.
        </p>
        <p>
          Sepät eivät paljastaneet salaisuuksiaan muille ja se sai ihmiset äärimmäisen uteliaiksi. Kun kyläläiset eivät
          ymmärtäneet sepän käyttämien prosessien kulkua ja kun seppä tuntui alati keskustelevan ahjon, alasimen tai
          palkeiden kanssa, alkoivat ihmiset uskoa, että sepällä täytyi olla luontaisia kykyjä hallita yliluonnollisia
          voimia.
        </p>
      </section>
      <a className={link} href="/pajan-hamarasta/arvostelu.jpg" rel="prefetch">
        Lue kirja-arvostelu
      </a>
      <a
        className={link}
        href="https://www.adlibris.com/fi/kirja/pajan-hamarasta-9789529342501"
        rel="external crossorigin prefetch"
      >
        Osta Adlibris-verkkokirjakaupasta
      </a>
      <footer className={footer}>
        <p>Jouni Jäppinen</p>
        <p>ISBN-978-952-93-4250-1</p>
        <Link to="/">Takaisin</Link>
      </footer>
    </main>
  </Layout>
);

export default Pajanhamarasta;