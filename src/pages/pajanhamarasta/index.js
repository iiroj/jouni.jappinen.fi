import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import styles from "./index.module.css";

import { default as arvostelu } from "files/pajanhämärästä-arvostelu.jpg";

export default function Pajanhamarasta() {
  return (
    <div>
      <Helmet title={`Pajan hämärästä – Jouni Jäppinen`} />
      <main className={styles.container}>
        <div className={styles.image} />
        <header className={styles.header}>
          <h1>Pajan hämärästä</h1>
          <h2>Sepän kulttuurihistoriaa</h2>
        </header>
        <section className={styles.section}>
          <p>
            Vanhan sanonnan mukaan seppä on taitava henkilö niin aineen kuin
            hengenkin alalla. Kirja luo katsauksen sepänalan esihistoriaan sekä
            tarinoihin kotimaamme sepistä, joita on onnekkaasti säilynyt
            jälkipolville. Muistitiedon mukaan seppien joukkoon mahtui
            monenlaisia persoonallisuuksia ja osa heistä toimi pajatyön ohella
            monenlaisissa muissakin tehtävissä, kuten kylänvanhimpina,
            poliitikkoina, parantajina, verenlaskijoina, tai -seisauttajina,
            näkijöinä, noitina, hautausurakoitsijoina, soitinrakentajina,
            puoskareina ja jopa kätilöinä.
          </p>
          <p>
            Osa sepistä harrasti aktiivisesti musiikkia rakentaen itse
            harmonnit, mandoliinit, kitarat, viulut ja kanteleet, esiintyen
            monenmoisissa kokoonpanoissa yli pitäjärajojen. Jotkut sepät saivan
            nimeä synnynnäisinä jutunkertojina, joiden kaskut ovat periytyneet
            tähän päivään asti. Huumoripitoiset seppäjutut toivat vaihtelua
            pajan rankkaan arkipäivään.
          </p>
          <p>
            Seppien joukkoon mahtui myös originelleja, jotka halveksivat
            avoimesti virkavaltaa, pappeja, rikasta säätyä.
          </p>
          <p>
            Yhteisön arvomaailman ja normien halveksiminen tuli esille mitä
            moninaisimimpien tempausten muodossa. Elämää väritti ennen vanhaan
            taikausko, noituus ja magia ja sepillä oli niiden harjoittamisessa
            oma tärkeä roolinsa, ensisijaisesti pajaelinkeinon edistäjänä, joka
            lienee vanhaa perua rautakaudelta. Taikuuden harjoittaminen pajassa
            pönkitti sepän asemaa kyläyhteisössä ja samalla se ylläpiti
            ammoisista ajoista asti periytynyttä sankarimyyttiä.
          </p>
          <p>
            Sepät eivät paljastaneet salaisuuksiaan muille ja se sai ihmiset
            äärimmäisen uteliaiksi. Kun kyläläiset eivät ymmärtäneet sepän
            käyttämien prosessien kulkua ja kun seppä tuntui alati keskustelevan
            ahjon, alasimen tai palkeiden kanssa, alkoivat ihmiset uskoa, että
            sepällä täytyi olla luontaisia kykyjä hallita yliluonnollisia
            voimia.
          </p>
        </section>
        <a className={styles.link} href={arvostelu} rel="prefetch">
          Lue kirja-arvostelu
        </a>
        <a
          className={styles.link}
          href="https://www.adlibris.com/fi/kirja/pajan-hamarasta-9789529342501"
          rel="external crossorigin prefetch"
        >
          Osta Adlibris-verkkokirjakaupasta
        </a>
        <footer className={styles.footer}>
          <p>Jouni Jäppinen</p>
          <p>ISBN-978-952-93-4250-1</p>
          <Link to="/">Takaisin</Link>
        </footer>
      </main>
    </div>
  );
}
