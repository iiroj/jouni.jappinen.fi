import { Link as RemixLink } from "@remix-run/react";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import { HTML_CACHE_CONTROL_HEADER, SECURITY_HEADERS } from "../headers";

export const headers = () => ({
  ...SECURITY_HEADERS,
  ...HTML_CACHE_CONTROL_HEADER,
});

export const meta = () => [
  {
    title: "Pajan hämärästä – Jouni Jäppinen",
  },
];

const GlobalStyles = createGlobalStyle({
  body: {
    backgroundColor: "rgb(26, 25, 25)",
    color: "white",
  },
});

const Image = styled.img({
  display: "block",
  height: "25vh",
  objectFit: "cover",
  width: "100%",
});

const Header = styled.header({
  backgroundColor: "rgb(61, 19, 15)",
  padding: "2rem",
  textAlign: "center",

  h1: {
    fontSize: "1.5rem",
    fontWeight: 600,
    lineHeight: "1.5rem",
  },
});

const Section = styled.section({
  backgroundColor: "rgb(61, 19, 15)",
  paddingBottom: "1rem",

  p: {
    margin: "0 auto 1rem auto",
    maxWidth: "50rem",
    padding: "0 1rem",
  },
});

const StyledLink = styled.a({
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

const Footer = styled.footer({
  margin: "0 auto",
  maxWidth: "50rem",
  padding: "1rem 0 4rem 0",
  textAlign: "center",

  p: {
    marginBottom: "0.5rem",
  },
});

const Pajanhamarasta = () => (
  <>
    <GlobalStyles />

    <picture>
      <source srcSet="/images/pajan-hamarasta.webp" type="image/webp" />
      <Image alt="Pajan hämärstä" src="/images/pajan-hamarasta.jpg" />
    </picture>

    <Header>
      <h1>Pajan hämärästä</h1>
      <h2>Sepän kulttuurihistoriaa</h2>
    </Header>

    <Section>
      <p>
        Vanhan sanonnan mukaan seppä on taitava henkilö niin aineen kuin
        hengenkin alalla. Kirja luo katsauksen sepänalan esihistoriaan sekä
        tarinoihin kotimaamme sepistä, joita on onnekkaasti säilynyt
        jälkipolville. Muistitiedon mukaan seppien joukkoon mahtui monenlaisia
        persoonallisuuksia ja osa heistä toimi pajatyön ohella monenlaisissa
        muissakin tehtävissä, kuten kylänvanhimpina, poliitikkoina, parantajina,
        verenlaskijoina, tai -seisauttajina, näkijöinä, noitina,
        hautausurakoitsijoina, soitinrakentajina, puoskareina ja jopa kätilöinä.
      </p>
      <p>
        Osa sepistä harrasti aktiivisesti musiikkia rakentaen itse harmonnit,
        mandoliinit, kitarat, viulut ja kanteleet, esiintyen monenmoisissa
        kokoonpanoissa yli pitäjärajojen. Jotkut sepät saivan nimeä
        synnynnäisinä jutunkertojina, joiden kaskut ovat periytyneet tähän
        päivään asti. Huumoripitoiset seppäjutut toivat vaihtelua pajan rankkaan
        arkipäivään.
      </p>
      <p>
        Seppien joukkoon mahtui myös originelleja, jotka halveksivat avoimesti
        virkavaltaa, pappeja, rikasta säätyä.
      </p>
      <p>
        Yhteisön arvomaailman ja normien halveksiminen tuli esille mitä
        moninaisimimpien tempausten muodossa. Elämää väritti ennen vanhaan
        taikausko, noituus ja magia ja sepillä oli niiden harjoittamisessa oma
        tärkeä roolinsa, ensisijaisesti pajaelinkeinon edistäjänä, joka lienee
        vanhaa perua rautakaudelta. Taikuuden harjoittaminen pajassa pönkitti
        sepän asemaa kyläyhteisössä ja samalla se ylläpiti ammoisista ajoista
        asti periytynyttä sankarimyyttiä.
      </p>
      <p>
        Sepät eivät paljastaneet salaisuuksiaan muille ja se sai ihmiset
        äärimmäisen uteliaiksi. Kun kyläläiset eivät ymmärtäneet sepän
        käyttämien prosessien kulkua ja kun seppä tuntui alati keskustelevan
        ahjon, alasimen tai palkeiden kanssa, alkoivat ihmiset uskoa, että
        sepällä täytyi olla luontaisia kykyjä hallita yliluonnollisia voimia.
      </p>
    </Section>

    <StyledLink href="/images/pajan-hamarasta-arvostelu.jpg" target="_blank">
      Lue kirja-arvostelu
    </StyledLink>

    <StyledLink
      href="https://www.adlibris.com/fi/kirja/pajan-hamarasta-9789529342501"
      rel="crossorigin external"
      target="_blank"
    >
      Osta Adlibris-verkkokirjakaupasta
    </StyledLink>

    <Footer>
      <p>Jouni Jäppinen</p>
      <p>ISBN-978-952-93-4250-1</p>
      <RemixLink to="/" prefetch="intent">
        Takaisin
      </RemixLink>
    </Footer>
  </>
);

export default Pajanhamarasta;
