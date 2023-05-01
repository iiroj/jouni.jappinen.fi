import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react';
import React from 'react';

import Reset from './components/Reset';

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

                <ScrollRestoration />

                <Scripts />

                <LiveReload port={8002} />

                {cfBeaconToken ? (
                    <script
                        crossOrigin="anonymous"
                        data-cf-beacon={`{"token": "${cfBeaconToken}"}`}
                        defer
                        integrity="sha384-30Fw2DRzkMuSxoj2OhfgdDE589rsGh8QIF6uq5D/EinLHxzEa7uBoFrTc3HRauSj"
                        src="https://static.cloudflareinsights.com/beacon.min.js"
                    />
                ) : null}
            </body>
        </html>
    );
};

export default App;
