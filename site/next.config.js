module.exports = {
    eslint: { ignoreDuringBuilds: true },
    experimental: { esmExternals: true },
    exportPathMap: async (defaultPaths) => defaultPaths,
    reactStrictMode: true,
    target: 'server',
    trailingSlash: true,
    webpack5: true,
}
