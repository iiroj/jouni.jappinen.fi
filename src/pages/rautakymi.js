import { css } from "@emotion/core";
import Link from "next/link";
import React from "react";
import { Helmet } from "react-helmet-async";

import { rautakymi } from "../styles";
import ComingSoon from "../components/ComingSoon";

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
  color: "white",
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
  color: "white",
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

const footer = css({
  backgroundColor: rautakymi.colors.darkGrey,
  color: "white",
  margin: "auto auto 0",
  paddingBottom: "4rem",
  textAlign: "center",
  width: "100%",

  p: {
    marginBottom: "0.5rem",
  },
});

export default ({ data }) => (
  <>
    <Helmet>
      <title>Rautakymi – Jouni Jäppinen</title>
    </Helmet>

    <ComingSoon />

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
        tunnettu montaakaan rautakautista asuinpaikkaa, tai hautaa ja
        irtolöydötkin oli laskettavissa yhden käden sormin. Löydöttömyyden
        perusteella alue ei ole kuulunut rannikon maanviljelysalueiden piiriin,
        mutta tosin kuin on joskus väitetty, pysyvää asutusta jokilaaksoissa
        näyttäisi olleen kivikaudelta lähtien kaikkina aikakausina. 1990-luvun
        lopulla tutkittiin ensimmäiset roomalaisajan röykkiöhaudat Pyhtään
        Strukan kalmistossa, josta alkaen varsinkin Kymijokilaakson
        rautakautisten ja keskiaikaisten löytöjen määrä on lisääntynyt
        dramaattisesti.
      </p>
      <p>
        Kahden arkeologian harrastajan Rautakymityöryhmä päätti vuonna 2010
        tutkia tulevan Koskenkylä-Kotka valtatien maastokäytävän uudelleen,
        vaikka tielinjalle oli tehty virallinen arkeologinen inventointi jo
        vuonna 2005. Päätös oli kohtalokas, sillä tielinjalta löytyi kaksi
        laajaa arkeologista kohdetta. Loviisan Tesjoella sijaitseva Viirankoski
        on osoittatunut rautakautiseksi asuinpaikaksi, kun taas Kymijoen suulta
        Ahvenkosken Haasianiemestä löytyneen sataman ajoitustulokset viittaavat
        viikinkiaikaiseen ja keskiaikaiseen toimintaan. Kumpikin kohde tuhoutui
        osittain syksyllä 2014 valmistuneen valtatien alle. Työryhmä inventoi
        Porvoon Ilolan ja Pyhtään Huutjärven välisiä jokilaaksoja kahdeksan
        vuoden ajan. Runsaasti kuvitettu tietokirja luo katsauksen alueen
        tutkimushistoriaan, ryhmän paikantamaan arkeologiseen aineistoon ja
        muinaisjäännöksiin, sekä työryhmän tutkimusten tuloksiin.
      </p>
    </section>

    <footer css={footer}>
      <p>Jouni Jäppinen</p>
      <Link href="/">
        <a>Takaisin</a>
      </Link>
    </footer>
  </>
);
