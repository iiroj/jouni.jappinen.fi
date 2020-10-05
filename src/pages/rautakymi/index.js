import { css } from "@emotion/core";
import Link from "next/link";
import React from "react";
import { Helmet } from "react-helmet-async";

import { rautakymi } from "../../styles";

const container = css({
  backgroundColor: "rgb(26, 25, 25)",
  color: "white",
});

const imageContainer = css({
  display: "flex",
  justifyContent: "center",
  padding: "4rem 0 2rem",

  img: {
    height: 300,
  },
});

const header = css({
  backgroundColor: rautakymi.colors.darkRed,

  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  textTransform: "uppercase",

  h1: {
    fontSize: "3rem",
    lineHeight: "3rem",
    padding: "2rem",
  },

  h2: {
    backgroundColor: rautakymi.colors.darkGrey,
    color: rautakymi.colors.brightRed,
    fontSize: "2rem",
    lineHeight: "2rem",
    padding: "2rem",
  },
});

const section = css({
  backgroundColor: rautakymi.colors.darkGrey,

  flexGrow: 1,
  lineHeight: 2.2,
  paddingBottom: "2rem",
  textAlign: "justify",

  p: {
    margin: "0 auto",
    maxWidth: "44rem",
    padding: "0 1rem",

    "&:not(:first-of-type)::before": {
      content: "''",
      display: "inline-block",
      width: "4ch",
    },
  },
});

const link = css({
  color: "rgb(161, 42, 38)",
  display: "block",
  fontSize: "1.5rem",
  marginBottom: "0.5rem",
  padding: "2rem",
  textAlign: "center",
  textDecoration: "none",

  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
});

const footer = css({
  margin: "auto auto 0",
  paddingBottom: "4rem",
  textAlign: "center",
  width: "100%",

  p: {
    marginBottom: "0.5rem",
  },
});

export default ({ data }) => (
  <div css={container}>
    <Helmet>
      <title>Rautakymi – Jouni Jäppinen</title>
    </Helmet>

    <header css={header}>
      <figure css={imageContainer}>
        <img alt="Rautakymi" src="/rautakymi-book-cover.png" />
      </figure>

      <h1>Rauta&shy;kymi</h1>
      <h2>Talonpoikia, Seppiä, Lohiylimyksiä</h2>
    </header>

    <section css={section}>
      <p>
        Ennen vuotta 1989 itäisen Uudenmaan ja Kymenlaakson rannikolta ei
        tunnettu montaakaan rautakautista asuinpaikkaa tai hautaa ja
        irtolöydötkin oli laskettavissa yhden käden sormin. Löydöttömyyden
        perusteella aluetta ei ole luettu kuuluvaksi rannikon
        maanviljelysalueisiin. 1990-luvun lopulla tutkittiin ensimmäiset
        roomalaisajan röykkiöhaudat Pyhtään Strukan kal- mistossa. Sittemmin
        itäisen Uudenmaan ja Kymijokilaakson rautakautisten ja keskiaikaisten
        löytöjen määrä on lisääntynyt vuosi vuodelta.
      </p>
      <p>
        Kahden henkilön Rautakymi- työryhmä päätti vuonna 2010 tutkia tulevan
        Koskenkylä-Kotka valtatien linjan uudelleen, vaikka tielinjalle oli
        tehty virallinen arkeologinen inventointi jo vuonna 2005. Päätös oli
        kohtalokas, sillä tielinjalta löytyi kaksi laajaa arkeologista kohdetta.
        Loviisan Tesjoella sijaitseva Viirankoski osoittautui moniperiodiseksi
        asuinpaikaksi, kun taas Kymijoen suulta Ahvenkosken Haasianiemestä
        löytynyt satama oli käytössä keskiajalla. Noin kolmannes kummastakin
        kohteesta tuhoutui syksyllä 2014 valmistuneen valtatien alle. Rautakymi
        työryhmä inventoi Porvoon Ilolan ja Pyhtään Huutjärven välisiä
        jokilaaksoja kahdeksan vuoden ajan. Runsaasti kuvitettu tietokirja luo
        katsauksen alueen tutkimushistoriaan, ryhmän kokoamaan arkeologiseen
        aineistoon, uusiin muinaisjäännöksiin, sekä materiaalitutkimusten
        tuloksiin.
      </p>
    </section>

    <a
      css={link}
      href="/rautakymi-arvostelu.jpg"
      rel="prefetch"
      target="_blank"
    >
      Lue kirja-arvostelu
    </a>

    <a
      css={link}
      href="https://www.booky.fi/tuote/jouni_jappinen/rautakymi_talonpoikia_seppia_lohiylimyksia/9789529431717"
      rel="crossorigin external noreferrer prefetch"
      target="_blank"
    >
      Osta Booky.fi -verkkokaupasta
    </a>

    <footer css={footer}>
      <p>Jouni Jäppinen</p>
      <Link href="/">
        <a>Takaisin</a>
      </Link>
    </footer>
  </div>
);
