import { Link } from "@remix-run/react";
import React from "react";

import { HTML_CACHE_CONTROL_HEADER, SECURITY_HEADERS } from "../headers";
import vars from "../styles/pajan-hamarasta.css";
import styles from "../styles/project.css";

export const headers = () => ({
  ...SECURITY_HEADERS,
  ...HTML_CACHE_CONTROL_HEADER,
});

export const links = () => [
  { rel: "stylesheet", href: vars },
  { rel: "stylesheet", href: styles },
];

export const meta = () => [
  {
    title: "Pajan hämärästä – Jouni Jäppinen",
  },
];

const Pajanhamarasta = () => (
  <>
    <picture>
      <source srcSet="/images/pajan-hamarasta.webp" type="image/webp" />
      <img alt="Pajan hämärstä" src="/images/pajan-hamarasta.jpg" />
    </picture>

    <header>
      <h1>Pajan hämärästä</h1>
      <h2>Sepän kulttuurihistoriaa</h2>
    </header>

    <section>
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
    </section>

    <Link href="/images/pajan-hamarasta-arvostelu.jpg" target="_blank">
      Lue kirja-arvostelu
    </Link>

    <Link
      href="https://www.adlibris.com/fi/kirja/pajan-hamarasta-9789529342501"
      rel="crossorigin external"
      target="_blank"
    >
      Osta Adlibris-verkkokirjakaupasta
    </Link>

    <footer>
      <p>Jouni Jäppinen</p>
      <p>ISBN-978-952-93-4250-1</p>
      <Link to="/" prefetch="intent">
        Takaisin
      </Link>
    </footer>
  </>
);

export default Pajanhamarasta;
