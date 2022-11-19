import { RemixServer } from '@remix-run/react';
import { renderToReadableStream } from 'react-dom/server';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

class StyleSheetInjector extends TransformStream {
    constructor({ sheet }) {
        const styles = sheet.getStyleTags();
        super({
            transform: (chunk, controller) => {
                controller.enqueue(chunk.replace('__STYLES__', styles));
            },
        });
    }
}

const handleRequest = async (request, responseStatusCode, responseHeaders, remixContext) => {
    responseHeaders.set('Content-Type', 'text/html');

    const sheet = new ServerStyleSheet();

    const stream = await renderToReadableStream(
        sheet.collectStyles(<RemixServer context={remixContext} url={request.url} />),
    );

    const transformed = stream
        .pipeThrough(new TextDecoderStream())
        .pipeThrough(new StyleSheetInjector({ sheet }))
        .pipeThrough(new TextEncoderStream());

    return new Response(transformed, {
        status: responseStatusCode,
        headers: responseHeaders,
    });
};

export default handleRequest;
