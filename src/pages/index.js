import GatsbyLink from "gatsby-link";
import React from "react";
import Helmet from "react-helmet-async";
import styled from "styled-components";

const microdata = JSON.stringify({
  "@context": "http://schema.org",
  "@type": "Person",
  name: "Jouni Jäppinen",
  jobTitle: "taiteilija",
  url: "https://jouni.jappinen.fi",
  email: "jouni@jappinen.fi",
  nationality: "Finland",
  address: {
    "@type": "PostalAddress",
    addressCountry: "Finland",
    addressLocality: "Loviisa"
  },
  alumniOf: "Turun yliopisto"
});

const BREAKPOINT = "1023px";
const minWidth = args => styleObject => ({
  [`@media (min-width: ${args})`]: styleObject
});
const tabletSize = minWidth(BREAKPOINT);

const Header = styled.header({
  background: "url(/sokerikko.jpg)",
  backgroundPosition: "25% center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  color: "white",
  height: "75%",
  overflowY: "hidden",
  position: "relative",

  ...tabletSize({
    height: "100%",
    position: "fixed",
    top: 0,
    width: "50%"
  })
});

const Heading = styled.div({
  left: "1rem",
  position: "fixed",
  top: "50vh",
  transform: "translateY(-100%)",

  h1: {
    fontSize: "1.5rem",
    fontWeight: 600,
    lineHeight: "1.5rem"
  }
});

const Caption = styled.caption({
  bottom: "0.5rem",
  color: "hsl(0, 0%, 60%)",
  fontSize: "75%",
  marginLeft: "0.5rem",
  position: "absolute",
  right: "0.5rem",
  textAlign: "right"
});

const Main = styled.main({
  position: "relative",

  ...tabletSize({
    marginLeft: "50%",
    width: "50%"
  })
});

const About = styled.section({
  margin: "4rem auto",
  maxWidth: "40rem",
  padding: "0 1rem",

  "p + p": {
    marginTop: "0.5rem"
  }
});

const Projects = styled.ul({
  display: "flex",
  flexWrap: "wrap",
  padding: "0.5rem",

  li: {
    boxSizing: "border-box",
    height: "40vh",
    padding: "0.5rem",
    width: "100%",

    ...minWidth("50rem")({
      width: "50%"
    }),

    "&:hover article": {
      transform: "scale(0.95)",
      transformOrigin: "50% 50%"
    }
  }
});

const Project = styled.article({
  backgroundColor: "rgba(0, 0, 0, 0.05)",
  backgroundPosition: "center",
  backgroundSize: "cover",
  boxSizing: "border-box",
  color: "white !important",
  height: "100%",
  position: "relative",
  transition: "transform 0.2s ease-out",

  "> div": {
    left: "50%",
    position: "absolute",
    textShadow: "0 1px 0 rgba(0, 0, 0, 0.2), 0 0px 4px rgba(0, 0, 0, 0.4)",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",

    h1: {
      fontSize: "1.5rem",
      fontWeight: 600
    }
  }
});

const PajanHamarasta = styled(Project)({
  backgroundImage: "url(/pajan-hamarasta.jpg)"
});

const IkuisetSeprat = styled(Project)({
  backgroundImage: "url(/ikuiset-seprat.jpg)",
  backgroundPosition: "center"
});

const Rautakymi = styled(Project)({
  backgroundImage: "url(/rautakymi.jpg)"
});

const Lovart = styled(Project)({
  backgroundImage: "url(/lovart.jpg)"
});

const Articles = styled.ul({
  justifyContent: "center",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  width: "100%",

  li: {
    boxSizing: "border-box",
    padding: "1rem",
    width: "13rem",

    "&:hover article": {
      transform: "scale(0.95)",
      transformOrigin: "50% 50%"
    }
  }
});

const Article = styled.article({
  boxSizing: "border-box",
  height: "100%",
  padding: "1rem",
  position: "relative",
  transition: "transform 0.2s ease-out",
  willChange: "transform",

  h1: {
    fontSize: "inherit",
    textAlign: "center"
  }
});

const Cover = styled.figure.attrs({
  role: "presentational"
})({
  backgroundPosition: "center",
  backgroundSize: "cover",
  height: 0,
  margin: "0 auto 1rem auto",
  paddingBottom: "106.67%",
  width: "75%"
});

const Rautakuona = styled(Cover)({
  backgroundImage: "url(/rautakymi-thumbnail.jpg)"
});

const Tammijarvi = styled(Cover)({
  backgroundImage: "url(/tammijarvi-thumbnail.jpg)"
});

const Straka = styled(Cover)({
  backgroundImage: "url(/stråka-thumbnail.jpg)"
});

const Anttijappinen = styled(Cover)({
  backgroundImage: "url(/antti-jappinen-thumbnail.jpg)",
  backgroundSize: "cover"
});

const Link = styled.a({
  borderTop: "1px solid rgba(0, 0, 0, 0.1)",
  display: "block",
  padding: "1rem 0",
  textAlign: "center",
  textDecoration: "none",

  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.05)"
  }
});

const Index = () => (
  <>
    <Helmet>
      <title>Jouni Jäppinen</title>
      <script type="application/ld+json">{microdata}</script>
    </Helmet>

    <Header>
      <Heading>
        <h1>Jouni Jäppinen</h1>
        <h2>Taiteilija ja kultaseppä</h2>
      </Heading>
      <Caption>
        Image: Sugar cup, cast iron, sterling silver. Finnish Design 8
        exhibition at Helsinki Design Museum 1991
      </Caption>
    </Header>

    <Main>
      <About>
        <p>
          <span>Jouni Jäppinen</span> on loviisalainen taiteilija ja kultaseppä,
          joka aloitti työuransa porvoolaisessa sepänpajassa 1970-luvun alussa.
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
      </About>

      <Projects>
        <li>
          <GatsbyLink to="/pajan-hamarasta/">
            <PajanHamarasta>
              <Heading>
                <h1>Pajan hämärästä</h1>
                <h2>Sepän kulttuurihistoriaa</h2>
              </Heading>
            </PajanHamarasta>
          </GatsbyLink>
        </li>
        <li typeof="Book">
          <GatsbyLink to="/ikuiset-seprat/">
            <IkuisetSeprat>
              <Heading>
                <h1>Ikuiset seprat</h1>
                <h2>
                  Tytärsaarelaisten ja virolaisten suhteet ennen toista
                  maailmansotaa
                </h2>
              </Heading>
            </IkuisetSeprat>
          </GatsbyLink>
        </li>
        <li>
          <a href="https://www.rautakymi.fi">
            <Rautakymi>
              <Heading>
                <h1>Talonpoikia, seppiä, lohiylimyksiä</h1>
                <h2>
                  Arkeologian harrastajien tutkielma Kymijokilaakson
                  rautakautisesta asutuksesta
                </h2>
              </Heading>
            </Rautakymi>
          </a>
        </li>
        <li>
          <a href="https://www.lovart.fi">
            <Lovart>
              <Heading>
                <h1>Loviisa Artists’ Studio</h1>
                <h2>Let’s work in peace</h2>
              </Heading>
            </Lovart>
          </a>
        </li>
      </Projects>

      <Articles>
        <li>
          <a href="/rautakuona.pdf">
            <Article>
              <Rautakuona alt="Kymijokisuiston rautakuona" />
              <h1>Kymijokisuiston rautakuona</h1>
            </Article>
          </a>
        </li>
        <li>
          <a href="/tammijärvi.pdf">
            <Article>
              <Tammijarvi alt="Experimentel forskning vid Tammijärvi i Pyttis" />
              <h1>Experimentel forskning vid Tammijärvi i Pyttis</h1>
            </Article>
          </a>
        </li>
        <li>
          <a href="/stråka.pdf">
            <Article>
              <Straka alt="Stråka Järnframställning" />
              <h1>Stråka Järnframställning</h1>
            </Article>
          </a>
        </li>
        <li>
          <a href="/antti-jappinen.pdf">
            <Article>
              <Anttijappinen alt="Sotamies Antti Jäppinen" />
              <h1>Sotamies Antti Jäppinen</h1>
            </Article>
          </a>
        </li>
      </Articles>

      <footer>
        <nav>
          <ul>
            <li>
              <Link href="/kirjoituksia.pdf">Kirjoituksia</Link>
            </li>
            <li>
              <Link href="mailto:Jouni Jäppinen <jouni@jappinen.fi>">
                Ota yhteyttä
              </Link>
            </li>
            <li>
              <Link
                href="https://www.finnishdesigners.fi/portfolio/jouni.jappinen"
                rel="external crossorigin prefetch"
              >
                Ornamo
              </Link>
            </li>
            <li>
              <Link
                href="https://www.artists-o.fi"
                rel="external crossorigin prefetch"
              >
                Taiteilijat O
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </Main>
  </>
);

export default Index;
