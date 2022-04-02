const isProduction = process.env.NODE_ENV === 'production'

const staticHeaders = [
    isProduction
        ? {
              key: 'Content-Security-Policy',
              value: [
                  `default-src 'self'`,
                  `connect-src 'sef' https://vitals.vercel-insights.com`,
                  `img-src 'self' data:`,
                  `script-src 'self' 'unsafe-inline' 'unsafe-eval'`,
                  `style-src 'self' 'unsafe-inline'`,
              ].join(';'),
          }
        : null,
    { key: 'Permissions-Policy', value: 'interest-cohort=()' },
    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubdomains; preload' },
    { key: 'X-Content-Type-Options', value: 'nosniff' },
    { key: 'X-Frame-Options', value: 'DENY' },
    { key: 'X-XSS-Protection', value: '1; mode=block' },
].filter(Boolean)

const headers = async () => [{ source: '/:path*', headers: staticHeaders }]

module.exports = headers
