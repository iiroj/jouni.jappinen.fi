import { createRequestHandler, handleAsset } from '@remix-run/cloudflare-workers';
import * as build from '@remix-run/dev/server-build';

import { getHeaders } from './headers';

const handleRequest = createRequestHandler({ build });

const handleEvent = async (event) => {
    const asset = await handleAsset(event, build);
    if (asset) {
        return asset;
    }

    const response = await handleRequest(event);
    return new Response(response.body, {
        headers: getHeaders(response.headers),
        status: response.status,
        statusText: response.statusText,
    });
};

addEventListener('fetch', (event) => {
    try {
        event.respondWith(handleEvent(event));
    } catch (error) {
        event.respondWith(new Response('Internal Server Error', { status: 500 }));
    }
});
