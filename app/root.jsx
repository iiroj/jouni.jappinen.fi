import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import React from 'react';

import Reset from './components/Reset';

export const meta = () => ({
    charset: 'utf-8',
    title: 'Jouni Jäppinen',
    viewport: 'width=device-width,initial-scale=1',
    'theme-color': '#00000',
    'X-UA-Compatible': 'IE=edge',
});

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
                        data-cf-beacon={`{"token": "${cfBeaconToken}"}`}
                        defer
                        src="https://static.cloudflareinsights.com/beacon.min.js"
                    />
                ) : null}
            </body>
        </html>
    );
};

export default App;
