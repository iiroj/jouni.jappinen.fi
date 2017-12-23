# jouni.jappinen.fi

[![pipeline status](https://gitlab.com/iiroj/jouni.jappinen.fi/badges/master/pipeline.svg)](https://gitlab.com/iiroj/jouni.jappinen.fi/commits/master)

A static site built with [Next.js](https://github.com/zeit/next.js/), available at [jouni.jappinen.fi](https://jouni.jappinen.fi).

The canonical repository for this project is at [gitlab:iiroj/jouni.jappinen.fi](https://gitlab.com/iiroj/jouni.jappinen.fi). It is mirrored at [github:iiroj/jouni.jappinen.fi](https://github.com/iiroj/jouni.jappinen.fi) for convenience.

## Technology used

This static site is built with [Next.js](https://github.com/zeit/next.js/), a framework for server-rendered or statically-exported [React](https://facebook.github.io/react/) apps. It is composed of basic React pure functional components and some static images.

[Styled-components](https://styled-components.com) are used for styling, so no external CSS files are needed. [Css-wipe](https://github.com/stackcss/css-wipe) is used for resetting browser default styles.

All `.js` files are formatted with [Prettier](https://prettier.io) for coherence. This is handled through [eslint](http://eslint.org).

## Development

Development is done locally with a standard [Node.js](https://nodejs.org/en/) install.

### Install dependencies
```
$ npm install
```

### Start the dev server
```
$ npm start
```

### Lint
```
$ npm run lint
```

### Building locally
```
$ npm run build
```

## Deployment

The live site, [jouni.jappinen.fi](https://jouni.jappinen.fi), is hosted in Amazon S3 with Cloudfront.

Every push to the `master` branch of the [canonical repository](https://gitlab.com/iiroj/jouni.jappinen.fi) is linted and built, and finally deployed to S3, using GitLab CI. Deploying is handled with `s3cmd` running in Docker. s3cmd also creates invalidations for CloudFront.

Please see the file `.gitlab-ci.yml` for build details.

## License

See [LICENSE](./LICENSE)
