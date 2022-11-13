import { RemixServer } from '@remix-run/react'
import { renderToString } from 'react-dom/server'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'

const handleRequest = (request, responseStatusCode, responseHeaders, remixContext) => {
    const sheet = new ServerStyleSheet()

    let markup = renderToString(sheet.collectStyles(<RemixServer context={remixContext} url={request.url} />))

    const styles = sheet.getStyleTags()
    markup = markup.replace('__STYLES__', styles)

    responseHeaders.set('Content-Type', 'text/html')

    return new Response(`<!DOCTYPE html>${markup}`, {
        status: responseStatusCode,
        headers: responseHeaders,
    })
}

export default handleRequest
