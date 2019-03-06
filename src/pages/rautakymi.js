import { css } from "@emotion/core";
import Link from "gatsby-link";
import React from "react";
import Helmet from "react-helmet-async";

import cover from "../assets/rautakymi/cover.png";
import cover2x from "../assets/rautakymi/cover@2x.png";

import { rautakymi } from "../styles";
import ComingSoon from "../components/ComingSoon";

const container = css({
  backgroundColor: rautakymi.colors.darkRed,
  color: "white"
});

const image = css({
  display: "block",
  margin: "0 auto",
  maxWidth: "100%",
  padding: "4rem 2rem 2rem"
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
    padding: "2rem"
  },

  h2: {
    backgroundColor: rautakymi.colors.darkGrey,
    color: rautakymi.colors.brightRed,
    fontSize: "2rem",
    lineHeight: "2rem",
    padding: "2rem"
  }
});

const section = css({
  backgroundColor: rautakymi.colors.darkGrey,
  paddingBottom: "2rem",

  p: {
    margin: "0 auto 1rem auto",
    maxWidth: "50rem",
    padding: "0 1rem"
  }
});

const footer = css({
  backgroundColor: rautakymi.colors.darkGrey,
  margin: "0 auto",
  paddingBottom: "4rem",
  textAlign: "center",

  p: {
    marginBottom: "0.5rem"
  }
});

const Rautakymi = () => (
  <main css={container}>
    <Helmet>
      <title>Rautakymi – Jouni Jäppinen</title>
    </Helmet>

    <ComingSoon />

    <img
      css={image}
      alt="Rautakymi"
      src={cover}
      srcSet={`${cover} 1x, ${cover2x} 2x`}
    />

    <header css={header}>
      <h1>Rauta&shy;kymi</h1>
      <h2>Asumattoman eräalueen myytti</h2>
    </header>

    <section css={section}>
      <p>
        Ennen vuotta 1989 itäisen Uudenmaan ja Kymenlaakson rannikolta ei
        tunnettu montaakaan rautakautista asuinpaikkaa, tai hautaa ja
        irtolöydötkin oli laskettavissa yhden käden sormin. Löydöttömyyden
        perusteella vakiintui vähitellen yli sata vuotta elänyt uskomus, jonka
        mukaan itäinen Uusimaa ja Kymenlaakson rannikko ei olisi koskaan
        kuulunut rautakautisen asutuksen piiriin. 1990-luvun lopulla tutkittiin
        ensimmäiset roomalaisajan röykkiöhaudat Pyhtään Strukan kalmistossa,
        josta alkaen varsinkin Kymijokilaakson rautakautisten ja keskiaikaisten
        löytöjen määrä on lisääntynyt dramaattisesti.
      </p>

      <p>
        Kahden arkeologian harrastajan perustama Rautakymityöryhmä päätti
        elokuussa 2010 tutkia Koskenkylä-Kotka moottoritien maastokäytävän
        uudelleen ryhmän havaittua jo vuonna 2005 tehdyssä Museoviraston
        arkeologisesessa inventoinnissa pahoja puutteita. Päätös oli kohtalokas,
        sillä työryhmä löysi tielinjalta kaksi laajaa rautakautista ja
        keskiaikaista asuinpaikkaa, joista vanhimmaksi on osoittautunut
        moniperiodinen Viirankoski Loviisassa, kun taas Ahvenkosken
        Haasianiemestä löytyneen lähes kilometrin pituisen muinaisen
        satama-alueen tutkimustulokset viittaavat viikinkiaikaiseen ja
        keskiaikaiseen asutukseen ja toimintaan. Molemmat kohteet tuhoutuivat
        osittain moottoritien alle..
      </p>

      <p>
        Myöhemmin työryhmä laajensi tutkimuksiaan kaikkiin jokilaaksoihin
        Porvoon Ilolan ja Pyhtään Huutjärven välisellä alueella. Runsaasti
        kuvitettu tietokirja luo katsauksen alueen tutkimushistoriaan, työryhmän
        vuosina 2004–2018 löytämään arkeologiseen aineistoon, sekä
        metallurgisten tutkimusten tuloksiin..
      </p>
    </section>

    <footer css={footer}>
      <p>Jouni Jäppinen</p>
      <Link to="/">Takaisin</Link>
    </footer>
  </main>
);

export default Rautakymi;
