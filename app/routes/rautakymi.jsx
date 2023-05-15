import { Link } from "@remix-run/react";
import React from "react";

import { HTML_CACHE_CONTROL_HEADER, SECURITY_HEADERS } from "../headers";
import vars from "../styles/rautakymi.css";
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
    title: "Rautakymi – Jouni Jäppinen",
  },
];

const Rautakymi = () => (
  <>
    <header id="header">
      <div>
        <picture>
          <source
            srcSet="/images/rautakymi-book-cover.webp"
            type="image/webp"
          />
          <img alt="Rautakymi" src="/images/rautakymi-book-cover.png" />
        </picture>
      </div>

      <h1>Rauta&shy;kymi</h1>
      <h2>Talonpoikia, Seppiä, Lohiylimyksiä</h2>
    </header>

    <section>
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

    <Link href="/images/rautakymi-arvostelu.jpg" target="_blank">
      Lue kirja-arvostelu (Östnyland)
    </Link>

    <Link
      href="/documents/rautakymi-historiallinen-aikakauskirja.pdf"
      target="_blank"
    >
      Lue kirja-arvostelu (Historiallinen Aikakauskirja)
    </Link>

    <Link
      href="https://www.booky.fi/tuote/jouni_jappinen/rautakymi_talonpoikia_seppia_lohiylimyksia/9789529431717"
      rel="crossorigin external"
      target="_blank"
    >
      Osta Booky.fi -verkkokaupasta
    </Link>

    <footer>
      <p>Jouni Jäppinen</p>
      <Link to="/" prefetch="intent">
        Takaisin
      </Link>
    </footer>
  </>
);

export default Rautakymi;
