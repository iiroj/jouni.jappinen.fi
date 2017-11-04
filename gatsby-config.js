module.exports = {
  siteMetadata: {
    name: 'Jouni Jäppinen',
    siteTitle: 'jouni.jappinen.fi',
    siteUrl: 'https://jouni.jappinen.fi/',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Jouni Jäppinen',
        short_name: 'Jäppinen',
        icons: [
          {
            src: '/icon.png',
            sizes: '600x600',
            type: 'image/png',
          },
        ],
        start_url: '/',
        background_color: 'white',
        theme_color: 'white',
        display: 'minimal-ui',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        allPageHeaders: [
          `Content-Security-Policy: default-src 'none'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; img-src 'self' data:; connect-src 'self' https://fonts.gstatic.com; manifest-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; worker-src 'self';`,
          `Referrer-Policy: origin-when-cross-origin`,
          `Link: </favicon.ico>; rel=preload; as=image`,
          `Link: </favicon.ico>; rel=preload; as=image`,
          `Link: </icon.png>; rel=preload; as=image`,
        ],
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
      },
    },
  ],
};
