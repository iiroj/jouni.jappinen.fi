export const HTML_CACHE_CONTROL_HEADER = {
    'Cache-Control': 'max-age=0, s-max-age=3600, stale-while-revalidate',
};

export const SECURITY_HEADERS = {
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
