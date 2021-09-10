module.exports = {
    env: {
        CF_WEB_ANALYTICS_TOKEN: process.env.CF_WEB_ANALYTICS_TOKEN,
    },
    eslint: { ignoreDuringBuilds: true },
    experimental: { esmExternals: true },
    reactStrictMode: true,
    target: 'serverless',
    trailingSlash: true,
    webpack5: true,
}
