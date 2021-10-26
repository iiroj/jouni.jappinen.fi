const headers = require('./next/headers')

module.exports = {
    eslint: { ignoreDuringBuilds: true },
    experimental: {
        concurrentFeatures: true,
        esmExternals: true,
    },
    exportPathMap: async (defaultPaths) => defaultPaths,
    headers,
    poweredByHeader: false,
    reactStrictMode: true,
    swcMinify: true,
    target: 'serverless',
    trailingSlash: false,
    webpack5: true,
}
