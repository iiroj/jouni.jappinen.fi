module.exports = {
  siteMetadata: {
    name: 'Jouni Jäppinen',
    siteTitle: 'jouni.jappinen.fi',
    siteUrl: 'https://jouni.jappinen.fi/'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
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
            type: 'image/png'
          }
        ],
        start_url: '/',
        background_color: 'white',
        theme_color: 'white',
        display: 'minimal-ui'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-preact'
  ]
}
