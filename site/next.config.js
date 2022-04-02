const headers = require('./next/headers')

const config = {
    experimental: {
        runtime: 'edge',
    },
    exportPathMap: async (defaultPaths) => defaultPaths,
    headers,
    poweredByHeader: false,
    swcMinify: true,
}

module.exports = config
