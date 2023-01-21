const SECURITY_HEADERS = {
    /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security */
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',

    /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection */
    'X-XSS-Protection': '1; mode=block',

    /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options */
    'X-Frame-Options': 'DENY',

    /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options */
    'X-Content-Type-Options': 'nosniff',

    /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy */
    'Referrer-Policy': 'strict-origin-when-cross-origin',

    /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy */
    'Cross-Origin-Embedder-Policy': 'require-corp; report-to="default";',

    /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy */
    'Cross-Origin-Opener-Policy': 'same-site; report-to="default";',

    /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Cross-Origin_Resource_Policy_(CORP) */
    'Cross-Origin-Resource-Policy': 'same-site',
};

const isProduction = process.env.NODE_ENV === 'production';

export const getHeaders = (init) => {
    const headers = new Headers(init);

    if (isProduction) {
        /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy */
        headers.set(
            'Content-Security-Policy',
            [
                `default-src 'self'`,
                `img-src 'self' data:`,
                `style-src 'self' 'unsafe-inline'`,
                process.env.NODE_ENV === 'production'
                    ? [
                          'connect-src cloudflareinsights.com',
                          `script-src 'self' 'unsafe-inline' static.cloudflareinsights.com`,
                      ]
                    : [`script-src 'self' 'unsafe-inline'`],
            ]
                .flat()
                .join(';'),
        );
    }

    for (const [headerName, headerValue] of Object.entries(SECURITY_HEADERS)) {
        headers.set(headerName, headerValue);
    }

    return headers;
};
