import { Link } from "@remix-run/react";
import React from "react";

import { HTML_CACHE_CONTROL_HEADER, SECURITY_HEADERS } from "../headers";
import styles from "../styles/index.css";

export const headers = () => ({
  ...SECURITY_HEADERS,
  ...HTML_CACHE_CONTROL_HEADER,
});

export const links = () => [{ rel: "stylesheet", href: styles }];

export const meta = () => [{ title: "Jouni Jäppinen" }];

const microdata = JSON.stringify({
  "@context": "http://schema.org",
  "@type": "Person",
  name: "Jouni Jäppinen",
  jobTitle: "FM, kultaseppä",
  url: "https://jouni.jappinen.fi",
  email: "jouni@jappinen.fi",
  nationality: "Finland",
  address: {
    "@type": "PostalAddress",
    addressCountry: "Finland",
    addressLocality: "Loviisa",
  },
  alumniOf: "Turun yliopisto",
});

const Root = () => (
  <>
    <header id="cover">
      <figure>
        <picture>
          <source
            srcSet="/images/sormus.webp 1x, /images/sormus@2x.webp 2x"
            type="image/webp"
          />
          <source
            srcSet="/images/sormus.jpg 1x, /images/sormus@2x.jpg 2x"
            type="image/jpeg"
          />
          <img alt="Rautakymi" src="/images/sormus@2x.jpg" />
        </picture>

        <figcaption>
          Image: Ring, sterling silver & colored titanium. Made in single pieces
          at the Strömfors atelier from 1986 to 1991. The Alice and Louis Koch
          Collection in the Swiss National Museum, Zurich (part of the museum
          collection on permanent display).
        </figcaption>
      </figure>

      <div className="heading">
        <h1>Jouni Jäppinen</h1>
        <h2>Taiteilija ja kultaseppä</h2>
      </div>
    </header>

    <main id="main">
      <section>
        <p>
          <span>Jouni Jäppinen</span> on loviisalainen taiteilija (FM,
          kultaseppä), joka aloitti työuransa porvoolaisessa sepänpajassa
          1970-luvun alussa.
        </p>
        <p>
          Hän jatkoi metallialan perusopintojen jälkeen opintojaan Lahden
          kultaseppäkoulussa ja myöhemmin Taideteollisessa korkeakoulussa,
          kunnes hakeutui Tampereen ja Turun yliopistoihin opiskelemaan
          ammattikasvatusta, sosiologiaa ja kulttuurihistoriaa.
        </p>
        <p>
          Jäppinen on työskennellyt 1980-luvulta lähtien korutaiteilijana,
          heraldikkona, lavastajana, kansainvälisen taiteilijavaihdon
          tuottajana, ja tänään hänet tunnetaan myös rautakautisten menetelmien
          tutkijana ja tietokirjailijana.
        </p>
      </section>

      <ul id="projects">
        <li>
          <Link to="/rautakymi">
            <article className="rautakymi">
              <picture>
                <source
                  srcSet="/images/rautakymi-book-cover.webp"
                  type="image/webp"
                />
                <img alt="Rautakymi" src="/images/rautakymi-book-cover.png" />
              </picture>
              <div className="heading">
                <h1>Rautakymi</h1>
                <h2>Talonpoikia, Seppiä, Lohiylimyksiä</h2>
              </div>
            </article>
          </Link>
        </li>

        <li>
          <Link to="/pajan-hamarasta">
            <article>
              <picture>
                <source
                  srcSet="/images/pajan-hamarasta.webp"
                  type="image/webp"
                />
                <img alt="Pajan hämärästä" src="/images/pajan-hamarasta.jpg" />
              </picture>
              <div className="heading">
                <h1>Pajan hämärästä</h1>
                <h2>Sepän kulttuurihistoriaa</h2>
              </div>
            </article>
          </Link>
        </li>

        <li>
          <Link to="/ikuiset-seprat">
            <article>
              <picture>
                <source
                  srcSet="/images/ikuiset-seprat.webp"
                  type="image/webp"
                />
                <img alt="Ikuiset seprat" src="/images/ikuiset-seprat.jpg" />
              </picture>
              <div className="heading">
                <h1>Ikuiset seprat</h1>
                <h2>
                  Tytärsaarelaisten ja virolaisten suhteet ennen toista
                  maailmansotaa
                </h2>
              </div>
            </article>
          </Link>
        </li>
      </ul>

      <ul id="articles">
        <li>
          <a href="/documents/viirankosken-vyokoukku.pdf">
            <article>
              <picture>
                <source
                  srcSet="/images/viirankosken-vyokoukku-thumbnail.webp"
                  type="image/webp"
                />
                <img
                  alt="Viirankosken vyökoukku"
                  src="/images/viirankosken-vyokoukku-thumbnail.jpg"
                />
              </picture>
              <h1>Viirankosken vyökoukku</h1>
            </article>
          </a>
        </li>

        <li>
          <a href="/documents/rautakuona.pdf">
            <article>
              <picture>
                <source
                  srcSet="/images/rautakymi-thumbnail.webp"
                  type="image/webp"
                />
                <img
                  alt="Viirankosken vyökoukku"
                  src="/images/rautakymi-thumbnail.jpg"
                />
              </picture>
              <h1>Kymijokisuiston rautakuona</h1>
            </article>
          </a>
        </li>

        <li>
          <a href="/documents/tammijarvi.pdf">
            <article className="tammijarvi">
              <picture>
                <source
                  srcSet="/images/tammijarvi-thumbnail.webp"
                  type="image/webp"
                />
                <img
                  alt="Experimentel forskning vid Tammijärvi i Pyttis"
                  src="/images/tammijarvi-thumbnail.jpg"
                />
              </picture>
              <h1>Experimentel forskning vid Tammijärvi i Pyttis</h1>
            </article>
          </a>
        </li>

        <li>
          <a href="/documents/Loviisa-Artists-Studio-1995-2021.pdf">
            <article>
              <picture>
                <source srcSet="/images/essinveistos.webp" type="image/webp" />
                <img
                  alt="Loviisa Artists’ Studio 1995–2021"
                  src="/images/essinveistos.jpg"
                />
              </picture>
              <h1>Loviisa Artists’ Studio 1995–2021</h1>
            </article>
          </a>
        </li>

        <li>
          <a href="/documents/straka.pdf">
            <article>
              <picture>
                <source
                  srcSet="/images/straka-thumbnail.webp"
                  type="image/webp"
                />
                <img
                  alt="Stråka Järnframställning"
                  src="/images/straka-thumbnail.jpg"
                />
              </picture>
              <h1>Stråka Järnframställning</h1>
            </article>
          </a>
        </li>

        <li>
          <a href="/documents/antti-jappinen.pdf">
            <article>
              <picture>
                <source
                  srcSet="/images/antti-jappinen-thumbnail.webp"
                  type="image/webp"
                />
                <img
                  alt="Sotamies Antti Jäppinen"
                  src="/images/antti-jappinen-thumbnail.jpg"
                />
              </picture>
              <h1>Sotamies Antti Jäppinen</h1>
            </article>
          </a>
        </li>
      </ul>

      <footer>
        <nav>
          <ul>
            <li>
              <Link className="link" to="/documents/kirjoituksia.pdf">
                Kirjoituksia
              </Link>
            </li>

            <li>
              <Link
                className="link"
                to="mailto:Jouni Jäppinen <jouni@jappinen.fi>"
              >
                Ota yhteyttä
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </main>

    <script
      dangerouslySetInnerHTML={{ __html: microdata }}
      type="application/ld+json"
    />
  </>
);

export default Root;
