import { getAssetFromKV, MethodNotAllowedError, NotFoundError } from '@cloudflare/kv-asset-handler'

const KV_OPTIONS = {
    cacheControl: {
        browserTTL: 60 * 60 /** One hour */,
        edgeTTL: 2 * 60 * 60 * 24 /** Two days */,
        bypassCache: false,
    },
}

/** The static headers to be added to rich HTML responses */
const staticHeaders = new Headers({
    'Content-Security-Policy': [
        `default-src 'none'`,
        `connect-src 'self'`,
        `font-src 'self'`,
        `img-src 'self' data:`,
        `object-src 'self'`,
        `script-src 'self' 'unsafe-inline' 'unsafe-eval'`,
        `style-src 'self' 'unsafe-inline'`,
    ].join(';'),
    'Permissions-Policy': 'interest-cohort=()' /** Disable Google's FLoC */,
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Strict-Transport-Security': 'max-age=63072000; includeSubdomains; preload',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
})

/** Add static headers to a Response */
const withHeaders = (response) => {
    if (response.ok) {
        for (const [key, value] of staticHeaders.entries()) {
            response.headers.set(key, value)
        }
    }

    return response
}

/** Map a request to the 404 page URL */
const mapRequestToNotFound = (req) => new Request(`${new URL(req.url).origin}/404.html`, req)

/**
 * Get the static response to a fetch event:
 *
 * 1. try to get a file from Cloudflare Workers KV storage and assign static headers
 * 2. if method was not allowed, return error 405
 * 3. if file was not found, return error 404
 * 4. return error 500
 */
const getResponse = async (event) => {
    try {
        const response = await getAssetFromKV(event, KV_OPTIONS)
        return withHeaders(response)
    } catch (error) {
        if (error instanceof MethodNotAllowedError) {
            return new Response('405 — Method Not Allowed', {
                headers: { 'Content-Type': 'text/plain' },
                status: 405,
                statusText: 'method not allowed',
            })
        }

        if (error instanceof NotFoundError) {
            const response = await getAssetFromKV(event, { mapRequestToAsset: mapRequestToNotFound })
            return withHeaders(new Response(response.body, { ...response, status: 404, statusText: 'not found' }))
        }

        return new Response('500 — Internal Error', {
            headers: { 'Content-Type': 'text/plain' },
            status: 500,
            statusText: 'internal error',
        })
    }
}

/** Listen to fetch events and get response */
addEventListener('fetch', (event) => {
    const response = getResponse(event)
    return event.respondWith(response)
})
