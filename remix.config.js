/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    /** @see LiveReload in `app/root.jsx` */
    devServerPort: 8002,
    publicPath: '/build/',
    server: './server/index.js',
    serverBuildPath: 'build/index.js',
    serverConditions: ['worker'],
    serverDependenciesToBundle: 'all',
    serverMainFields: ['browser', 'module', 'main'],
    serverMinify: true,
    serverModuleFormat: 'esm',
    serverPlatform: 'neutral',

    future: {
        v2_errorBoundary: true,
        v2_meta: true,
        v2_normalizeFormMethod: true,
        v2_routeConvention: true,
    },
};
