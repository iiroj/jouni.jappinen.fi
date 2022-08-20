const isProduction = process.env.NODE_ENV === 'production'

const config = {
    cleanDistDir: true,

    compiler: {
        styledComponents: true,
    },

    eslint: {
        ignoreDuringBuilds: true,
    },

    experimental: {
        browsersListForSwc: true,
        runtime: 'experimental-edge',
    },

    headers: () => [
        {
            source: '/:path*',
            headers: [
                {
                    key: 'Content-Security-Policy',
                    value: isProduction
                        ? [
                              `default-src 'self'`,
                              `connect-src 'sef' https://vitals.vercel-insights.com`,
                              `img-src 'self' data:`,
                              `script-src 'self' 'unsafe-inline' 'unsafe-eval'`,
                              `style-src 'self' 'unsafe-inline'`,
                          ].join(';')
                        : '',
                },
                { key: 'Permissions-Policy', value: 'interest-cohort=()' },
                { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubdomains; preload' },
                { key: 'X-Content-Type-Options', value: 'nosniff' },
                { key: 'X-Frame-Options', value: 'DENY' },
                { key: 'X-XSS-Protection', value: '1; mode=block' },
            ],
        },
    ],

    swcMinify: true,

    typescript: {
        ignoreBuildErrors: true,
    },
}

module.exports = config
