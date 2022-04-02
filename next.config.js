const headers = require('./next/headers')

const config = {
    experimental: {
        runtime: 'edge',
    },
    headers,
    poweredByHeader: false,
    swcMinify: true,
}

module.exports = config
