import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styles from './index.module.css'

import { default as anttijappinenPDF } from 'files/anttijappinen.pdf'
import { default as kirjoituksiaPDF } from 'files/kirjoituksia.pdf'
import { default as rautakuonaPDF } from 'files/rautakuona.pdf'
import { default as stråkaPDF } from 'files/stråka.pdf'
import { default as tammijärviPDF } from 'files/tammijärvi.pdf'

export default function Index () {
  const microdata = {
    '@context': 'http://schema.org',
    '@type': 'Person',
    'name': 'Jouni Jäppinen',
    'jobTitle': 'taiteilija',
    'url': 'https://jouni.jappinen.fi',
    'email': 'jouni@jappinen.fi',
    'nationality': 'Finland',
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'Finland',
      'addressLocality': 'Loviisa'
    },
    'alumniOf': 'Turun yliopisto'
  }

  return (
    <div>
      <Helmet
        title='Jouni Jäppinen'
        script={[
          { type: 'application/ld+json', innerHTML: `${JSON.stringify(microdata)}` }
        ]}
      />
      <header className={styles.header}>
        <div className={styles.headingContainer}>
          <h1 className={styles.heading}>Jouni Jäppinen</h1>
          <h2 className={styles.subheading}>Taiteilija ja kultaseppä</h2>
        </div>
        <aside className={styles.caption}>
          <p>Image: Sugar cup, cast iron, sterling silver. Finnish Design 8 exhibition at Helsinki Design Museum 1991</p>
        </aside>
      </header>
      <main className={styles.main}>
        <section className={styles.about}>
          <p><span>Jouni Jäppinen</span> on loviisalainen taiteilija ja kultaseppä, joka aloitti työuransa porvoolaisessa sepänpajassa 1970-luvun alussa.</p>
          <p>Hän jatkoi metallialan perusopintojen jälkeen opintojaan Lahden kultaseppäkoulussa ja myöhemmin Taideteollisessa korkeakoulussa, kunnes hakeutui Tampereen ja Turun yliopistoihin opiskelemaan ammattikasvatusta, sosiologiaa ja kulttuurihistoriaa.</p>
          <p>Jäppinen on työskennellyt 1980-luvulta lähtien korutaiteilijana, heraldikkona, lavastajana, kansainvälisen taiteilijavaihdon tuottajana, ja tänään hänet tunnetaan myös rautakautisten menetelmien tutkijana ja tietokirjailijana.</p>
        </section>
        <ul className={styles.projects}>
          <li>
            <Link to='/pajanhamarasta/'>
              <article className={styles.projectPajanhamarasta}>
                <div>
                  <h1>Pajan hämärästä</h1>
                  <h2>Sepän kulttuurihistoriaa</h2>
                </div>
              </article>
            </Link>
          </li>
          <li typeof='Book'>
            <Link to='/ikuisetseprat/'>
              <article className={styles.projectIkuisetseprat}>
                <div>
                  <h1>Ikuiset seprat</h1>
                  <h2>Tytärsaarelaisten ja virolaisten suhteet ennen toista maailmansotaa</h2>
                </div>
              </article>
            </Link>
          </li>
          <li>
            <a href='https://rautakymi.fi'>
              <article className={styles.projectRautakymi}>
                <div>
                  <h1>Talonpoikia, seppiä, lohiylimyksiä</h1>
                  <h2>Arkeologian harrastajien tutkielma Kymijokilaakson rautakautisesta asutuksesta</h2>
                </div>
              </article>
            </a>
          </li>
          <li>
            <a href='https://lovart.fi'>
              <article className={styles.projectLovart}>
                <div>
                  <h1>Loviisa Artists’ Studio</h1>
                  <h2>Let's work in peace</h2>
                </div>
              </article>
            </a>
          </li>
        </ul>
        <ul className={styles.articles}>
          <li>
            <a href={rautakuonaPDF}>
              <article className={styles.article}>
                <div className={styles.coverRautakuona} />
                <h1>Kymijokisuiston rautakuona</h1>
              </article>
            </a>
          </li>
          <li>
            <a href={tammijärviPDF}>
              <article className={styles.article}>
                <div className={styles.coverTammijarvi} />
                <h1>Experimentel forskning vid Tammijärvi i Pyttis</h1>
              </article>
            </a>
          </li>
          <li>
            <a href={stråkaPDF}>
              <article className={styles.article}>
                <div className={styles.coverStraka} />
                <h1>Stråka Järnframställning</h1>
              </article>
            </a>
          </li>
          <li>
            <a href={anttijappinenPDF}>
              <article className={styles.article}>
                <div className={styles.coverAnttijappinen} />
                <h1>Sotamies Antti Jäppinen</h1>
              </article>
            </a>
          </li>
        </ul>
        <footer>
          <nav className={styles.links}>
            <ul>
              <li>
                <a href={kirjoituksiaPDF} rel='prefetch'>Kirjoituksia</a>
              </li>
              <li>
                <a href='mailto:Jouni Jäppinen <jouni@jappinen.fi>'>Ota yhteyttä</a>
              </li>
              <li>
                <a href='http://www.finnishdesigners.fi/portfolio/jouni.jappinen' rel='external crossorigin prefetch'>Ornamo</a>
              </li>
              <li>
                <a href='http://www.artists-o.fi' rel='external crossorigin prefetch'>Taiteilijat O</a>
              </li>
            </ul>
          </nav>
        </footer>
      </main>
    </div>
  )
}
