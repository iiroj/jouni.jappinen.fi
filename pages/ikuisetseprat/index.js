import React, { Component } from 'react'
import Helmet from 'react-helmet'

import { config } from 'config'
import './index.scss'

export default class Ikuisetseprat extends Component {

  render () {
    return (
      <div className='ikuisetsepratPage'>
        <Helmet title={`Ikuiset seprat – ${config.authorName}`} />
        <main typeof="Book">
          <div className="image"></div>
          <header>
            <h1 property="headline">Ikuiset seprat</h1>
            <h2 property="alternativeHeadline">Tytärsaarelaisten ja virolaisten suhteet ennen toista maailmansotaa</h2>
          </header>
          <section>
            <p>Tytärsaaren perifeerinen sijainti lähempänä Viron kuin Suomen rannikkoa tarjosi saarelaisille mahdollisuuden ylläpitää vilkkaita suhteita virolaisten kanssa satojen vuosien ajan. Elämä Tytärsaarella oli fyysisesti raskasta ja edellytti saarelaiselta täydellistä omatoimisuutta ja monitaituruutta. Elinehto oli virolaisten kanssa käyty suolasilakan vaihtokauppa maanviljelystuotteisiin. Kanssakäyminen edellytti saarelaisilta laivanrakennus- ja merenkulkutaitoa, sekä viron kielen osaamista. Satojen vuosien kuluessa kielet ja tavat sekoittuivat osittain toisiinsa. Virolaiset ja tytärsaarelaiset pitivät toisiaan avoimina ja rehellisinä. Virossa tytärsaarelaisten ei muisteta pettäneen virolaisia ystäviään kertaakaan.</p>
            <p>Pienen ja talvisin täydellisessä eristyksessä eläneen Tytärsaaren kalastajayhteisölle virolaiset ystävät olivat kaikki kaikessa. Jäidenlähtöä ja purjehduskauden ensimmäistä Viron matkaa odottivat kaikki saarelaiset kuumeisesti. Jokaisella tytärsaarelaisella suvulla ja perheellä oli Virossa useita vaihtuvia kauppaseproja, mutta vain yksi ”ikuinen sepra”, joka tarkoitti ikimuistoisista ajoista samojen perheiden välillä periytynyttä sepraystävää. Suhteet olivat syviä ja aikalaislähteiden mukaan ystävykset pitivät toisiaan perheenjäsenten arvoisina verisukulaisina, joiden puolesta oltiin valmiina tarvittaessa vaikka kuolemaan.</p>
            <p>Tytärsaaren nuorisoseura aloitti 1920-luvun lopulla esiintymismatkat Viroon, jotka huipentuivat vuosina 1935– 1939 kahteentoista suureen heimojuhlaan Tytärsaaressa sekä Purtse-Jõesuun, Lüganusen, Pikkaristin, Sämin ja Varudin kylissä Virumaalla. Suurimpiin juhliin osallistui Sämisillan kievarissa yli tuhat virolaista vierasta. Tytärsaaren nuorisoseuran huvitoimikunta esitti tuolloin virolaisille useita näytelmiä, kansantanssia ja runonlausuntaa.</p>
            <p>Vilkas kanssakäyminen johti 1920- ja 1930-luvulla lukuisiin seurustelusuhteisiin, kirjeenvaihtoystävyyteen ja lopulta neljään avioliittoon, tytärsaarelaisten kalastajien ja laivurien löytäessä Virumaalta morsiamen. Seprojen ystävyyssuhteet katkesivat äkillisesti 11.10.1939, jolloin Tytärsaari evakuoitiin muutaman tunnin kuluessa. Tuona päivänä Virossa oli useita tytärsaarelaisia aluksineen, joille evakuointikäsky vietiin moottoriveneellä ja jolloin ystävyyssuhteet katkesivat.</p>
          </section>
          <a href="http://www.kymensanomat.fi/Online/2016/06/21/Kirja%3A%20Yst%C3%A4vyytt%C3%A4%20%20yli%20merien/2016320953078/4" rel="external crossorigin prefetch" property="url" target="_blank">Lue kirja-arvostelu</a>
          <a href="http://www.adlibris.com/fi/kirja/ikuiset-seprat-9789529371310" rel="external crossorigin prefetch" property="url" target="_blank">Osta Adlibris-verkkokirjakaupasta</a>
          <footer>
            <p property="author">Jouni Jäppinen</p>
            <p property="isbn">ISBN 978-952-93-7131-0</p><a href="/" rel="prefetch">Takaisin</a>
            <meta property="inLanguage" content="fi-FI"/>
            <meta property="publisher" content="Books on Demand"/>
          </footer>
        </main>
      </div>
    )
  }
}