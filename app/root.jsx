import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react';
import React from 'react';

import Reset from './components/Reset';

const isProduction = process.env.NODE_ENV === 'production';
export const links = () => [
    { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' },
    { rel: 'apple-touch-icon', href: '/icon.png' },
];

export const loader = () => ({
    cfBeaconToken: CF_BEACON_TOKEN || null,
});

const App = () => {
    const { cfBeaconToken } = useLoaderData();

    return (
        <html lang="fi">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <Meta />
                <Links />
                {typeof document === 'undefined' ? '__STYLES__' : null}
            </head>
            <body>
                <Reset />
                <Outlet />

                {isProduction ? null : <ScrollRestoration />}

                {isProduction ? null : <Scripts />}

                {isProduction ? null : <LiveReload port={8002} />}

                {cfBeaconToken ? (
                    <script
                        crossOrigin="anonymous"
                        data-cf-beacon={`{"token": "${cfBeaconToken}"}`}
                        defer
                        integrity="sha384-ikHI8F+DCZ/OP4pxSzGmk/E2UZdZ8TNqbm/HJcr90E1vUeqCnW7y8D8dC9AGuWV9"
                        src="https://static.cloudflareinsights.com/beacon.min.js"
                    />
                ) : null}
            </body>
        </html>
    );
};

export default App;
