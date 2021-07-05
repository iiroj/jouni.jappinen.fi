import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

import CloudflareWebAnalytics from '../components/CloudflareWebAnalytics'

class Document extends NextDocument {
    static async getInitialProps(ctx) {
        const initialProps = await NextDocument.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
                <CloudflareWebAnalytics token={process.env.CF_WEB_ANALYTICS_TOKEN} />
            </Html>
        )
    }
}

export default Document
