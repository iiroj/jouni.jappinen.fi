/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    /** @see LiveReload in `app/root.jsx` */
    devServerPort: 8002,
    server: './server/index.js',
    serverBuildTarget: 'cloudflare-workers',

    future: {
        v2_meta: true,
        v2_routeConvention: true,
    },
};
