const headers = require('./next/headers')

const config = {
    eslint: {
        ignoreDuringBuilds: true,
    },

    experimental: {
        runtime: 'experimental-edge',
    },

    headers,

    swcMinify: true,

    typescript: {
        ignoreBuildErrors: true,
    },
}

module.exports = config
