module.exports = {
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*': [
            'Cache-Control: public, max-age=2592000, no-cache',
            "Content-Security-Policy: default-src 'none'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; img-src 'self' data:; connect-src 'self' https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;",
            'Referrer-Policy: origin-when-cross-origin'
          ],
          '/sw.js': ['Cache-Control: max-age=0, no-cache, no-store, must-revalidate', 'Expires: 0', 'Pragma: no-cache']
        },
        mergeCachingHeaders: false
      }
    }
  ]
};
