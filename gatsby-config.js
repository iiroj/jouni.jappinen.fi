const path = require("path");

const cspConfig = [
  "default-src 'none'",
  "connect-src 'self' https://fonts.gstatic.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: https://*.cloudfront.net",
  "object-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com"
];

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src", "images")
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        headers: {
          "/*": [
            "Link: <https://fonts.googleapis.com/css?family=Spectral:400,600>;crossorigin=anonymous;rel=preload;as=style;",
            "Referrer-Policy: no-referrer-when-downgrade",
            "Referrer-Policy: strict-origin-when-cross-origin",
            "Strict-Transport-Security: max-age=63072000; includeSubdomains; preload",
            "X-Content-Type-Options: nosniff",
            "X-Frame-Options: DENY",
            "X-XSS-Protection: 1; mode=block",
            `Content-Security-Policy: ${cspConfig.join("; ")}`
          ]
        }
      }
    }
  ]
};
