import { RemixServer } from '@remix-run/react'
import { renderToReadableStream } from 'react-dom/server'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'

// eslint-disable-next-line no-undef
const textDecorer = new TextDecoderStream()
// eslint-disable-next-line no-undef
const textEncoder = new TextEncoderStream()

class StyleSheetInjector extends TransformStream {
    constructor({ sheet }) {
        const styles = sheet.getStyleTags()
        super({
            transform: (chunk, controller) => {
                controller.enqueue(chunk.replace('__STYLES__', styles))
            },
        })
    }
}

const handleRequest = async (request, responseStatusCode, responseHeaders, remixContext) => {
    responseHeaders.set('Content-Type', 'text/html')

    const sheet = new ServerStyleSheet()

    const stream = await renderToReadableStream(
        sheet.collectStyles(<RemixServer context={remixContext} url={request.url} />)
    )

    const transformed = stream
        .pipeThrough(textDecorer)
        .pipeThrough(new StyleSheetInjector({ sheet }))
        .pipeThrough(textEncoder)

    return new Response(transformed, {
        status: responseStatusCode,
        headers: responseHeaders,
    })
}

export default handleRequest
