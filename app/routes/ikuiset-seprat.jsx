import { Link } from "@remix-run/react";
import React from "react";

import { HTML_CACHE_CONTROL_HEADER, SECURITY_HEADERS } from "../headers";
import vars from "../styles/ikuiset-seprat.css";
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
    title: "Ikuiset seprat – Jouni Jäppinen",
  },
];

const Ikuisetseprat = () => (
  <>
    <picture>
      <source srcSet="/images/ikuiset-seprat.webp" type="image/webp" />
      <img alt="Ikuiset seprat" src="/images/ikuiset-seprat.jpg" />
    </picture>

    <header>
      <h1>Ikuiset seprat</h1>
      <h2>
        Tytärsaarelaisten ja virolaisten suhteet ennen toista maailmansotaa
      </h2>
    </header>

    <section>
      <p>
        Tytärsaaren perifeerinen sijainti lähempänä Viron kuin Suomen rannikkoa
        tarjosi saarelaisille mahdollisuuden ylläpitää vilkkaita suhteita
        virolaisten kanssa satojen vuosien ajan. Elämä Tytärsaarella oli
        fyysisesti raskasta ja edellytti saarelaiselta täydellistä
        omatoimisuutta ja monitaituruutta. Elinehto oli virolaisten kanssa käyty
        suolasilakan vaihtokauppa maanviljelystuotteisiin. Kanssakäyminen
        edellytti saarelaisilta laivanrakennus- ja merenkulkutaitoa, sekä viron
        kielen osaamista. Satojen vuosien kuluessa kielet ja tavat sekoittuivat
        osittain toisiinsa. Virolaiset ja tytärsaarelaiset pitivät toisiaan
        avoimina ja rehellisinä. Virossa tytärsaarelaisten ei muisteta pettäneen
        virolaisia ystäviään kertaakaan.
      </p>
      <p>
        Pienen ja talvisin täydellisessä eristyksessä eläneen Tytärsaaren
        kalastajayhteisölle virolaiset ystävät olivat kaikki kaikessa.
        Jäidenlähtöä ja purjehduskauden ensimmäistä Viron matkaa odottivat
        kaikki saarelaiset kuumeisesti. Jokaisella tytärsaarelaisella suvulla ja
        perheellä oli Virossa useita vaihtuvia kauppaseproja, mutta vain yksi
        ”ikuinen sepra”, joka tarkoitti ikimuistoisista ajoista samojen
        perheiden välillä periytynyttä sepraystävää. Suhteet olivat syviä ja
        aikalaislähteiden mukaan ystävykset pitivät toisiaan perheenjäsenten
        arvoisina verisukulaisina, joiden puolesta oltiin valmiina tarvittaessa
        vaikka kuolemaan.
      </p>
      <p>
        Tytärsaaren nuorisoseura aloitti 1920–luvun lopulla esiintymismatkat
        Viroon, jotka huipentuivat vuosina 1935–1939 kahteentoista suureen
        heimojuhlaan Tytärsaaressa sekä Purtse-Jõesuun, Lüganusen, Pikkaristin,
        Sämin ja Varudin kylissä Virumaalla. Suurimpiin juhliin osallistui
        Sämisillan kievarissa yli tuhat virolaista vierasta. Tytärsaaren
        nuorisoseuran huvitoimikunta esitti tuolloin virolaisille useita
        näytelmiä, kansantanssia ja runonlausuntaa.
      </p>
      <p>
        Vilkas kanssakäyminen johti 1920- ja 1930-luvulla lukuisiin
        seurustelusuhteisiin, kirjeenvaihtoystävyyteen ja lopulta neljään
        avioliittoon, tytärsaarelaisten kalastajien ja laivurien löytäessä
        Virumaalta morsiamen. Seprojen ystävyyssuhteet katkesivat äkillisesti
        11.10.1939, jolloin Tytärsaari evakuoitiin muutaman tunnin kuluessa.
        Tuona päivänä Virossa oli useita tytärsaarelaisia aluksineen, joille
        evakuointikäsky vietiin moottoriveneellä ja jolloin ystävyyssuhteet
        katkesivat.
      </p>
    </section>

    <Link href="/images/paivio_arvostelu_22.6.16.jpg" target="_blank">
      Lue kirja-arvostelu (Kymen Sanomat)
    </Link>

    <Link href="/documents/ikuiset-seprat-arvostelu.pdf" target="_blank">
      Lue kirja-arvostelu (Tuglas-seura)
    </Link>

    <Link
      href="https://www.adlibris.com/fi/kirja/ikuiset-seprat-9789529371310"
      rel="crossorigin external"
      target="_blank"
    >
      Osta Adlibris-verkkokirjakaupasta
    </Link>

    <footer>
      <p>Jouni Jäppinen</p>
      <p>ISBN 978-952-93-7131-0</p>
      <Link to="/" prefetch="intent">
        Takaisin
      </Link>
    </footer>
  </>
);

export default Ikuisetseprat;
