import { getAssetFromKV, NotFoundError } from '@cloudflare/kv-asset-handler'

const KV_OPTIONS = {
    cacheControl: {
        browserTTL: 60 * 60 /** One hour */,
        edgeTTL: 2 * 60 * 60 * 24 /** Two days */,
    },
}

const STATIC_HEADERS = [
    [
        'Content-Security-Policy',
        "default-src 'none'; connect-src 'self' https://fonts.gstatic.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; object-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    ],
    ['Link', '<https://fonts.googleapis.com/css?family=Spectral:400,600> crossorigin=anonymous rel=preload as=style'],
    /** Disable Google's FLoC */
    ['Permissions-Policy', 'interest-cohort=()'],
    ['Referrer-Policy', 'strict-origin-when-cross-origin'],
    ['Strict-Transport-Security', 'max-age=63072000; includeSubdomains; preload'],
    ['X-Content-Type-Options', 'nosniff'],
    ['X-Frame-Options', 'DENY'],
    ['X-XSS-Protection', '1; mode=block'],
]

const withResponseHeaders = async (response) => {
    if (!response.ok) return response

    for (const [key, value] of STATIC_HEADERS) {
        response.headers.set(key, value)
    }

    return response
}

const getResponse = async (event) => {
    try {
        const response = await getAssetFromKV(event)
        return withResponseHeaders(response)
    } catch (error) {
        if (error instanceof NotFoundError) {
            const notFoundResponse = await getAssetFromKV(event, {
                mapRequestToAsset: (req) => new Request(`${new URL(req.url).origin}/404/index.html`, req),
            })

            return withResponseHeaders(
                new Response(notFoundResponse.body, {
                    ...notFoundResponse,
                    status: 404,
                    statusText: 'not found',
                })
            )
        }

        return new Response('500 — Internal Error', {
            headers: { 'Content-Type': 'text/plain' },
            status: 500,
            statusText: 'intrernal error',
        })
    }
}

addEventListener('fetch', async (event) => {
    const response = getResponse(event)
    return event.respondWith(response)
})
