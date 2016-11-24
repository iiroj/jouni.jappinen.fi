import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router'
import { config } from 'config'
import './index.scss'

function Index () {
  const microdata = {
    '@context': 'http://schema.org',
    '@type': 'Person',
    'name': config.authorName,
    'jobTitle': 'taiteilija',
    'url': config.siteUrl,
    'email': config.authorEmail,
    'nationality': 'Finland',
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'Finland',
      'addressLocality': 'Loviisa'
    },
    'alumniOf': 'Turun yliopisto'
  }

  return (
    <div className='indexPage'>
      <Helmet
        title={config.authorName}
        script={[
          {'type': 'application/ld+json', 'innerHTML': `${JSON.stringify(microdata)}`}
        ]}
      />
      <header className='splash'>
        <div>
          <h1>{config.authorName}</h1>
          <h2>{config.authorJobTitle}</h2>
        </div>
        <aside>
          <p>Image: Sugar cup, cast iron, sterling silver. Finnish Design 8 exhibition at Helsinki Design Museum 1991</p>
        </aside>
      </header>
      <main>
        <section className='about'>
          <p><span>Jouni Jäppinen</span> on loviisalainen taiteilija ja kultaseppä, joka aloitti työuransa porvoolaisessa sepänpajassa 1970-luvun alussa.</p>
          <p>Hän jatkoi metallialan perusopintojen jälkeen opintojaan Lahden kultaseppäkoulussa ja myöhemmin Taideteollisessa korkeakoulussa, kunnes hakeutui Tampereen ja Turun yliopistoihin opiskelemaan ammattikasvatusta, sosiologiaa ja kulttuurihistoriaa.</p>
          <p>Jäppinen on työskennellyt 1980-luvulta lähtien korutaiteilijana, heraldikkona, lavastajana, kansainvälisen taiteilijavaihdon tuottajana, ja tänään hänet tunnetaan myös rautakautisten menetelmien tutkijana ja tietokirjailijana.</p>
        </section>
        <ul className='projects'>
          <li>
            <Link to='/pajanhamarasta/'>
              <article id='pajanhamarasta'>
                <div>
                  <h1>Pajan hämärästä</h1>
                  <h2>Sepän kulttuurihistoriaa</h2>
                </div>
              </article>
            </Link>
          </li>
          <li typeof='Book'>
            <Link to='/ikuisetseprat/'>
              <article id='ikuisetseprat'>
                <div>
                  <h1>Ikuiset seprat</h1>
                  <h2>Tytärsaarelaisten ja virolaisten suhteet ennen toista maailmansotaa</h2>
                </div>
              </article>
            </Link>
          </li>
          <li>
            <a href='https://rautakymi.fi' target='_blank'>
              <article id='rautakymi'>
                <div>
                  <h1>Talonpoikia, seppiä, lohiylimyksiä</h1>
                  <h2>Arkeologian harrastajien tutkielma Kymijokilaakson rautakautisesta asutuksesta</h2>
                </div>
              </article>
            </a>
          </li>
          <li>
            <a href='https://lovart.fi' target='_blank'>
              <article id='lovart'>
                <div>
                  <h1>Loviisa Artists' Studio</h1>
                  <h2>Let's work in peace</h2>
                </div>
              </article>
            </a>
          </li>
        </ul>
        <ul className='articles'>
          <li>
            <a href='/rautakuona.pdf' target='_blank'>
              <article id='rautakuona'>
                <div className='cover' />
                <h1>Kymijokisuiston rautakuona</h1>
              </article>
            </a>
          </li>
          <li>
            <a href='/tammijarvi.pdf' target='_blank'>
              <article id='tammijarvi'>
                <div className='cover' />
                <h1>Experimentel forskning vid Tammijärvi i Pyttis</h1>
              </article>
            </a>
          </li>
          <li>
            <a href='/straka.pdf' target='_blank'>
              <article id='straka'>
                <div className='cover' />
                <h1>Stråka Järnframställning</h1>
              </article>
            </a>
          </li>
          <li>
            <a href='/anttijappinen.pdf' target='_blank'>
              <article id='anttijappinen'>
                <div className='cover' />
                <h1>Sotamies Antti Jäppinen</h1>
              </article>
            </a>
          </li>
        </ul>
        <footer>
          <nav className='links'>
            <ul>
              <li>
                <a href='/kirjoituksia.pdf' rel='prefetch'>Kirjoituksia</a>
              </li>
              <li>
                <a href='mailto:Jouni Jäppinen <jouni@jappinen.fi>'>Ota yhteyttä</a>
              </li>
              <li>
                <a href='http://www.finnishdesigners.fi/portfolio/jouni.jappinen' rel='external crossorigin prefetch' target='_blank'>Ornamo</a>
              </li>
              <li>
                <a href='http://www.artists-o.fi' rel='external crossorigin prefetch' target='_blank'>Taiteilijat O</a>
              </li>
            </ul>
          </nav>
        </footer>
      </main>
    </div>
  )
}

export default Index
