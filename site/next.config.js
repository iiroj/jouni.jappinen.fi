const headers = require('./next/headers')

module.exports = {
    eslint: { ignoreDuringBuilds: true },
    experimental: {
        esmExternals: true,
        swcLoader: true,
        swcMinify: true,
    },
    exportPathMap: async (defaultPaths) => defaultPaths,
    headers,
    poweredByHeader: false,
    reactStrictMode: true,
    target: 'serverless',
    trailingSlash: true,
    webpack5: true,
}
