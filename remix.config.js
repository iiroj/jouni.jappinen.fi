/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    /** @see LiveReload in `app/root.jsx` */
    devServerPort: 8002,
    server: './server/index.js',
    serverBuildTarget: 'cloudflare-workers',
};
