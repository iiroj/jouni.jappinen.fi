const headers = require('./next/headers')

module.exports = {
    eslint: { ignoreDuringBuilds: true },
    experimental: {
        esmExternals: true,
    },
    exportPathMap: async (defaultPaths) => defaultPaths,
    headers,
    poweredByHeader: false,
    reactStrictMode: true,
    swcMinify: true,
    target: 'serverless',
    trailingSlash: true,
    webpack5: true,
}
