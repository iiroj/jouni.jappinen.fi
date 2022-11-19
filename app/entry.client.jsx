import { RemixBrowser } from '@remix-run/react';
import { hydrateRoot } from 'react-dom/client';
import React from 'react';

hydrateRoot(document, <RemixBrowser />);
