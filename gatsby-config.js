module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*': [
            "Content-Security-Policy: default-src 'none'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; img-src 'self' data:; connect-src 'self' https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;",
            'Referrer-Policy: origin-when-cross-origin'
          ]
        },
        mergeCachingHeaders: false,
        transformHeaders: (headers, path) =>
          path.endsWith('/') || path.endsWith('.html')
            ? headers.concat(
                'Link: <https://fonts.gstatic.com/s/spectral/v4/rnCr-xNNww_2s0amA9M5knjsS_ul.woff2>; rel=preload; as=font',
                'Link: <https://fonts.gstatic.com/s/spectral/v4/rnCs-xNNww_2s0amA9vmtm3BafaPWnII.woff2>; rel=preload; as=font'
              )
            : headers
      }
    }
  ]
};
