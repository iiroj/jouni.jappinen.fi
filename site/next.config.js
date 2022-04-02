const headers = require('./next/headers')

const config = {
    exportPathMap: async (defaultPaths) => defaultPaths,
    headers,
    poweredByHeader: false,
    swcMinify: true,
}

module.exports = config
