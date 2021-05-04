import { css } from '@emotion/react'
import Link from 'next/link'
import { Helmet } from 'react-helmet-async'
import React from 'react'

import { rautakymi } from '../styles'

const microdata = JSON.stringify({
    '@context': 'http://schema.org',
    '@type': 'Person',
    name: 'Jouni Jäppinen',
    jobTitle: 'taiteilija',
    url: 'https://jouni.jappinen.fi',
    email: 'jouni@jappinen.fi',
    nationality: 'Finland',
    address: {
        '@type': 'PostalAddress',
        addressCountry: 'Finland',
        addressLocality: 'Loviisa',
    },
    alumniOf: 'Turun yliopisto',
})

const BREAKPOINT = '1023px'
const minWidth = (args) => (styleObject) => ({
    [`@media (min-width: ${args})`]: styleObject,
})
const tabletSize = minWidth(BREAKPOINT)

const headerStyles = css({
    color: 'white',
    overflowY: 'hidden',
    position: 'relative',

    ...tabletSize({
        height: '100%',
        position: 'fixed',
        top: 0,
        width: '50%',
    }),
})

const headingStyles = css({
    marginLeft: '1rem',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-100%)',

    h1: {
        fontSize: '1.5rem',
        fontWeight: 600,
        lineHeight: '1.5rem',
    },

    ...tabletSize({
        padding: 0,
        position: 'fixed',
    }),
})

const figureStyles = css({
    position: 'relative',

    '&, img': {
        height: '100%',
        objectFit: 'cover',
        objectPosition: '0% 50%',
        width: '100%',
        top: 0,
        left: 0,

        ...tabletSize({
            objectPosition: '33% 50%',
        }),
    },
})

const captionStyles = css({
    bottom: '0.5rem',
    color: 'hsl(0, 0%, 60%)',
    fontSize: '0.75em',
    lineHeight: '1rem',
    margin: '0.5rem',
    position: 'absolute',
})

const mainStyles = css({
    position: 'relative',

    ...tabletSize({
        marginLeft: '50%',
        width: '50%',
    }),
})

const aboutStyles = css({
    margin: '4rem auto',
    maxWidth: '40rem',
    padding: '0 1rem',

    'p + p': {
        marginTop: '0.5rem',
    },
})

const projectsStyles = css({
    display: 'flex',
    flexWrap: 'wrap',
    padding: '0.5rem',

    li: {
        boxSizing: 'border-box',
        height: '40vh',
        padding: '0.5rem',
        width: '100%',

        ...minWidth('50rem')({
            width: '50%',

            '&:first-child': {
                width: '100%',
            },
        }),

        '&:hover article': {
            transform: 'scale(0.95)',
            transformOrigin: '50% 50%',
        },
    },
})

const projectStyles = css({
    boxSizing: 'border-box',
    color: 'white !important',
    height: '100%',
    position: 'relative',
    transition: 'transform 0.2s ease-out',

    '> div': {
        left: '50%',
        position: 'absolute',
        textShadow: '0 1px 0 rgba(0, 0, 0, 0.2), 0 0px 4px rgba(0, 0, 0, 0.4)',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        zIndex: 2,

        h1: {
            fontSize: '1.5rem',
            fontWeight: 600,
        },
    },

    img: {
        height: '100%',
        left: 0,
        objectFit: 'cover',
        position: 'absolute',
        top: 0,
        width: '100%',
    },

    '&::before': {
        background: 'rgba(0, 0, 0, 0.4)',
        bottom: 0,
        content: '""',
        display: 'block',
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1,
    },
})

const rautakymiBookStyles = css(projectStyles, {
    backgroundColor: rautakymi.colors.darkRed,
})

const articlesStyles = css({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',

    li: {
        boxSizing: 'border-box',
        flex: '0 1 15rem',
        padding: '1rem',

        '&:hover article': {
            transform: 'scale(0.95)',
            transformOrigin: '50% 50%',
        },
    },
})

const articleStyles = css({
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: '1rem',
    position: 'relative',
    transition: 'transform 0.2s ease-out',
    willChange: 'transform',

    picture: {
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'center',
    },

    img: {
        marginBottom: '1rem',
        objectFit: 'contain',
        objectPosition: 'top center',
        position: 'relative',
        width: '75%',
    },

    h1: {
        fontSize: 'inherit',
        textAlign: 'center',
    },
})

const tammijarviStyles = css(articleStyles, {
    img: {
        objectPosition: 'bottom center',
    },
})

const linksStyles = css({
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    display: 'block',
    padding: '1rem 0',
    textAlign: 'center',
    textDecoration: 'none',

    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
    },
})

const Root = () => (
    <>
        <Helmet>
            <title>Jouni Jäppinen</title>
            <script type="application/ld+json">{microdata}</script>
        </Helmet>

        <header css={headerStyles}>
            <figure css={figureStyles}>
                <picture>
                    <source srcSet="sormus.webp 1x, sormus@2x.webp 2x" type="image/webp" />
                    <source srcSet="sormus.jpg 1x, sormus@2x.jpg 2x" type="image/jpeg" />
                    <img alt="Rautakymi" src="/sormus@2x.jpg" />
                </picture>

                <figcaption css={captionStyles}>
                    <p>
                        Image: Ring, sterling silver & colored titanium. Made in single pieces at the Strömfors atelier
                        from 1986 to1991.
                    </p>
                    <p>The Alice and Louis Koch Collection exhibition in Swiss National Museum Zurich, Switzerland</p>
                </figcaption>
            </figure>

            <div css={headingStyles}>
                <h1>Jouni Jäppinen</h1>
                <h2>Taiteilija ja kultaseppä</h2>
            </div>
        </header>

        <div css={mainStyles}>
            <section css={aboutStyles}>
                <p>
                    <span>Jouni Jäppinen</span> on loviisalainen taiteilija (HuK, kultaseppä), joka aloitti työuransa
                    porvoolaisessa sepänpajassa 1970-luvun alussa.
                </p>
                <p>
                    Hän jatkoi metallialan perusopintojen jälkeen opintojaan Lahden kultaseppäkoulussa ja myöhemmin
                    Taideteollisessa korkeakoulussa, kunnes hakeutui Tampereen ja Turun yliopistoihin opiskelemaan
                    ammattikasvatusta, sosiologiaa ja kulttuurihistoriaa.
                </p>
                <p>
                    Jäppinen on työskennellyt 1980-luvulta lähtien korutaiteilijana, heraldikkona, lavastajana,
                    kansainvälisen taiteilijavaihdon tuottajana, ja tänään hänet tunnetaan myös rautakautisten
                    menetelmien tutkijana ja tietokirjailijana.
                </p>
            </section>

            <ul css={projectsStyles}>
                <li>
                    <Link href="/rautakymi/">
                        <a>
                            <article css={rautakymiBookStyles}>
                                <picture>
                                    <source srcSet="/rautakymi-book-cover.webp" type="image/webp" />
                                    <img alt="Rautakymi" src="/rautakymi-book-cover.png" />
                                </picture>
                                <div css={headingStyles}>
                                    <h1>Rautakymi</h1>
                                    <h2>Talonpoikia, Seppiä, Lohiylimyksiä</h2>
                                </div>
                            </article>
                        </a>
                    </Link>
                </li>

                <li>
                    <Link href="/pajan-hamarasta/">
                        <a>
                            <article css={projectStyles}>
                                <picture>
                                    <source srcSet="/pajan-hamarasta.webp" type="image/webp" />
                                    <img alt="Pajan hämärästä" src="/pajan-hamarasta.jpg" />
                                </picture>
                                <div css={headingStyles}>
                                    <h1>Pajan hämärästä</h1>
                                    <h2>Sepän kulttuurihistoriaa</h2>
                                </div>
                            </article>
                        </a>
                    </Link>
                </li>

                <li typeof="Book">
                    <Link href="/ikuiset-seprat/">
                        <a>
                            <article css={projectStyles}>
                                <picture>
                                    <source srcSet="/ikuiset-seprat.webp" type="image/webp" />
                                    <img alt="Ikuiset seprat" src="/ikuiset-seprat.jpg" />
                                </picture>
                                <div css={headingStyles}>
                                    <h1>Ikuiset seprat</h1>
                                    <h2>Tytärsaarelaisten ja virolaisten suhteet ennen toista maailmansotaa</h2>
                                </div>
                            </article>
                        </a>
                    </Link>
                </li>
            </ul>

            <ul css={articlesStyles}>
                <li>
                    <a href="/viirankosken-vyokoukku.pdf">
                        <article css={articleStyles}>
                            <picture>
                                <source srcSet="/viirankosken-vyokoukku-thumbnail.webp" type="image/webp" />
                                <img alt="Viirankosken vyökoukku" src="/viirankosken-vyokoukku-thumbnail.jpg" />
                            </picture>
                            <h1>Viirankosken vyökoukku</h1>
                        </article>
                    </a>
                </li>

                <li>
                    <a href="/rautakuona.pdf">
                        <article css={articleStyles}>
                            <picture>
                                <source srcSet="/rautakymi-thumbnail.webp" type="image/webp" />
                                <img alt="Viirankosken vyökoukku" src="/rautakymi-thumbnail.jpg" />
                            </picture>
                            <h1>Kymijokisuiston rautakuona</h1>
                        </article>
                    </a>
                </li>

                <li>
                    <a href="/tammijarvi.pdf">
                        <article css={tammijarviStyles}>
                            <picture>
                                <source srcSet="/tammijarvi-thumbnail.webp" type="image/webp" />
                                <img
                                    alt="Experimentel forskning vid Tammijärvi i Pyttis"
                                    src="/tammijarvi-thumbnail.jpg"
                                />
                            </picture>
                            <h1>Experimentel forskning vid Tammijärvi i Pyttis</h1>
                        </article>
                    </a>
                </li>

                <li>
                    <a href="/straka.pdf">
                        <article css={articleStyles}>
                            <picture>
                                <source srcSet="/straka-thumbnail.webp" type="image/webp" />
                                <img alt="Stråka Järnframställning" src="/straka-thumbnail.jpg" />
                            </picture>
                            <h1>Stråka Järnframställning</h1>
                        </article>
                    </a>
                </li>

                <li>
                    <a href="/antti-jappinen.pdf">
                        <article css={articleStyles}>
                            <picture>
                                <source srcSet="/antti-jappinen-thumbnail.webp" type="image/webp" />
                                <img alt="Sotamies Antti Jäppinen" src="/antti-jappinen-thumbnail.jpg" />
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
                            <a css={linksStyles} href="/kirjoituksia.pdf">
                                Kirjoituksia
                            </a>
                        </li>

                        <li>
                            <a css={linksStyles} href="mailto:Jouni Jäppinen <jouni@jappinen.fi>">
                                Ota yhteyttä
                            </a>
                        </li>

                        <li>
                            <a
                                css={linksStyles}
                                href="https://www.finnishdesigners.fi/portfolio/jouni.jappinen"
                                rel="external crossorigin prefetch"
                            >
                                Ornamo
                            </a>
                        </li>

                        <li>
                            <a
                                css={linksStyles}
                                href="https://artists-o.fi/fi/kuukauden-taiteilija/arkisto/2019-jouni-jappinen"
                                rel="external crossorigin prefetch"
                            >
                                Taiteilijat O
                            </a>
                        </li>
                    </ul>
                </nav>
            </footer>
        </div>
    </>
)

export default Root
