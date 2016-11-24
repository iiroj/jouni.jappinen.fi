import React, { Component } from 'react'
import Helmet from 'react-helmet'

import { config } from 'config'
import './index.scss'

export default class Pajanhamarasta extends Component {

  render () {
    return (
      <div className='pajanhamarastaPage'>
        <Helmet title={`Pajan hämärästä – ${config.authorName}`} />
        <main typeof="Book">
          <div className="image"></div>
          <header>
            <h1 property="headline">Pajan hämärästä</h1>
            <h2 property="alternativeHeadline">Sepän kulttuurihistoriaa</h2>
          </header>
          <section>
            <p>Vanhan sanonnan mukaan seppä on taitava henkilö niin aineen kuin hengenkin alalla. Kirja luo katsauksen sepänalan esihistoriaan sekä tarinoihin kotimaamme sepistä, joita on onnekkaasti säilynyt jälkipolville. Muistitiedon mukaan seppien joukkoon mahtui monenlaisia persoonallisuuksia ja osa heistä toimi pajatyön ohella monenlaisissa muissakin tehtävissä, kuten kylänvanhimpina, poliitikkoina, parantajina, verenlaskijoina, tai -seisauttajina, näkijöinä, noitina, hautausurakoitsijoina, soitinrakentajina, puoskareina ja jopa kätilöinä.</p>
            <p>Osa sepistä harrasti aktiivisesti musiikkia rakentaen itse harmonnit, mandoliinit, kitarat, viulut ja kanteleet, esiintyen monenmoisissa kokoonpanoissa yli pitäjärajojen. Jotkut sepät saivan nimeä synnynnäisinä jutunkertojina, joiden kaskut ovat periytyneet tähän päivään asti. Huumoripitoiset seppäjutut toivat vaihtelua pajan rankkaan arkipäivään.</p>
            <p>Seppien joukkoon mahtui myös originelleja, jotka halveksivat avoimesti virkavaltaa, pappeja, rikasta säätyä.</p>
            <p>Yhteisön arvomaailman ja normien halveksiminen tuli esille mitä moninaisimimpien tempausten muodossa. Elämää väritti ennen vanhaan taikausko, noituus ja magia ja sepillä oli niiden harjoittamisessa oma tärkeä roolinsa, ensisijaisesti pajaelinkeinon edistäjänä, joka lienee vanhaa perua rautakaudelta. Taikuuden harjoittaminen pajassa pönkitti sepän asemaa kyläyhteisössä ja samalla se ylläpiti ammoisista ajoista asti periytynyttä sankarimyyttiä.</p>
            <p>Sepät eivät paljastaneet salaisuuksiaan muille ja se sai ihmiset äärimmäisen uteliaiksi. Kun kyläläiset eivät ymmärtäneet sepän käyttämien prosessien kulkua ja kun seppä tuntui alati keskustelevan ahjon, alasimen tai palkeiden kanssa, alkoivat ihmiset uskoa, että sepällä täytyi olla luontaisia kykyjä hallita yliluonnollisia voimia.</p>
          </section>
          <a href="/pajanhamarasta-arvostelu.jpg" rel="prefetch" property="url" target="_blank">Lue kirja-arvostelu</a>
          <a href="https://www.adlibris.com/fi/kirja/pajan-hamarasta-9789529342501" rel="external crossorigin prefetch" property="url" target="_blank">Osta Adlibris-verkkokirjakaupasta</a>
          <footer>
            <p property="author">Jouni Jäppinen</p>
            <p property="isbn">ISBN-978-952-93-4250-1</p><a href="/" rel="prefetch">Takaisin</a>
            <meta property="inLanguage" content="fi-FI"/>
            <meta property="publisher" content="Books on Demand"/>
          </footer>
        </main>
      </div>
    )
  }
}
