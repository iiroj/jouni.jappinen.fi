import React from 'react';
import { css } from 'react-emotion';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

const container = css`
  background-color: rgb(219, 219, 219);
`;

const image = css`
  background: url('/ikuiset-seprat/cover.jpg');
  background-position: 50% 75%;
  background-size: cover;
  height: 25vh;
`;

const header = css`
  background-color: rgb(0, 74, 128);
  color: white;
  margin-bottom: 2rem;
  padding: 2rem;
  text-align: center;

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.5rem;
  }
`;

const section = css`
  padding-bottom: 1rem;

  p {
    margin: 0 auto 1rem auto;
    max-width: 50rem;
    padding: 0 1rem;
  }
`;

const link = css`
  color: rgb(0, 74, 128);
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

const Ikuisetseprat = () => (
  <main className={container}>
    <Helmet>
      <title>Ikuiset seprat – Jouni Jäppinen</title>
    </Helmet>
    <div className={image} role="presentation" alt="Ikuiset seprat" />
    <header className={header}>
      <h1>Ikuiset seprat</h1>
      <h2>Tytärsaarelaisten ja virolaisten suhteet ennen toista maailmansotaa</h2>
    </header>
    <section className={section}>
      <p>
        Tytärsaaren perifeerinen sijainti lähempänä Viron kuin Suomen rannikkoa tarjosi saarelaisille mahdollisuuden
        ylläpitää vilkkaita suhteita virolaisten kanssa satojen vuosien ajan. Elämä Tytärsaarella oli fyysisesti
        raskasta ja edellytti saarelaiselta täydellistä omatoimisuutta ja monitaituruutta. Elinehto oli virolaisten
        kanssa käyty suolasilakan vaihtokauppa maanviljelystuotteisiin. Kanssakäyminen edellytti saarelaisilta
        laivanrakennus- ja merenkulkutaitoa, sekä viron kielen osaamista. Satojen vuosien kuluessa kielet ja tavat
        sekoittuivat osittain toisiinsa. Virolaiset ja tytärsaarelaiset pitivät toisiaan avoimina ja rehellisinä.
        Virossa tytärsaarelaisten ei muisteta pettäneen virolaisia ystäviään kertaakaan.
      </p>
      <p>
        Pienen ja talvisin täydellisessä eristyksessä eläneen Tytärsaaren kalastajayhteisölle virolaiset ystävät olivat
        kaikki kaikessa. Jäidenlähtöä ja purjehduskauden ensimmäistä Viron matkaa odottivat kaikki saarelaiset
        kuumeisesti. Jokaisella tytärsaarelaisella suvulla ja perheellä oli Virossa useita vaihtuvia kauppaseproja,
        mutta vain yksi ”ikuinen sepra”, joka tarkoitti ikimuistoisista ajoista samojen perheiden välillä periytynyttä
        sepraystävää. Suhteet olivat syviä ja aikalaislähteiden mukaan ystävykset pitivät toisiaan perheenjäsenten
        arvoisina verisukulaisina, joiden puolesta oltiin valmiina tarvittaessa vaikka kuolemaan.
      </p>
      <p>
        Tytärsaaren nuorisoseura aloitti 1920–luvun lopulla esiintymismatkat Viroon, jotka huipentuivat vuosina
        1935–1939 kahteentoista suureen heimojuhlaan Tytärsaaressa sekä Purtse-Jõesuun, Lüganusen, Pikkaristin, Sämin ja
        Varudin kylissä Virumaalla. Suurimpiin juhliin osallistui Sämisillan kievarissa yli tuhat virolaista vierasta.
        Tytärsaaren nuorisoseuran huvitoimikunta esitti tuolloin virolaisille useita näytelmiä, kansantanssia ja
        runonlausuntaa.
      </p>
      <p>
        Vilkas kanssakäyminen johti 1920- ja 1930-luvulla lukuisiin seurustelusuhteisiin, kirjeenvaihtoystävyyteen ja
        lopulta neljään avioliittoon, tytärsaarelaisten kalastajien ja laivurien löytäessä Virumaalta morsiamen.
        Seprojen ystävyyssuhteet katkesivat äkillisesti 11.10.1939, jolloin Tytärsaari evakuoitiin muutaman tunnin
        kuluessa. Tuona päivänä Virossa oli useita tytärsaarelaisia aluksineen, joille evakuointikäsky vietiin
        moottoriveneellä ja jolloin ystävyyssuhteet katkesivat.
      </p>
    </section>
    <a
      className={link}
      href="https://kymensanomat.fi/uutiset/lahella/13a4ccf6-a72c-48f1-9c8d-2eb7af624bbe"
      rel="external crossorigin prefetch"
    >
      Lue kirja-arvostelu (Kymen Sanomat)
    </a>
    <a
      className={link}
      href="https://www.tuglas.fi/ikuiset-seprat.-tytärsaarelaisten-ja-virolaisten-suhteet-ennen-toista-maailmansotaa"
      rel="external crossorigin prefetch"
    >
      Lue kirja-arvostelu (Tuglas-seura)
    </a>
    <a
      className={link}
      href="https://www.adlibris.com/fi/kirja/ikuiset-seprat-9789529371310"
      rel="external crossorigin prefetch"
    >
      Osta Adlibris-verkkokirjakaupasta
    </a>
    <footer className={footer}>
      <p>Jouni Jäppinen</p>
      <p>ISBN 978-952-93-7131-0</p>
      <Link to="/">Takaisin</Link>
    </footer>
  </main>
);

export default Ikuisetseprat;
