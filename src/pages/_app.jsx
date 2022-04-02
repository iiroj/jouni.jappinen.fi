import Head from 'next/head'
import React from 'react'

import Main from '../components/Main'
import Reset from '../components/Reset'

const App = ({ Component, pageProps }) => (
    <>
        <Reset />
        <Head>
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            <link rel="apple-touch-icon" href="/icon.png" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </Head>

        <Main>
            <Component {...pageProps} />
        </Main>
    </>
)

App.displayName = 'App'

export default App
