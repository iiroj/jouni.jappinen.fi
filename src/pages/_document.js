import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

import CloudflareWebAnalytics from '../components/CloudflareWebAnalytics'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return initialProps
    }

    render() {
        return (
            <Html lang="fi">
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

export default MyDocument
