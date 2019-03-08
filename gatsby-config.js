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
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        headers: {
          "/*": [
            `Content-Security-Policy: ${cspConfig.join("; ")}`,
            "Feature-Policy: default 'none'",
            "Referrer-Policy: no-referrer-when-downgrade"
          ]
        },
        mergeCachingHeaders: false,
        transformHeaders: (headers, path) =>
          path.endsWith("/") || path.endsWith(".html")
            ? headers.concat(
                "Link: <https://fonts.gstatic.com/s/spectral/v4/rnCr-xNNww_2s0amA9M5knjsS_ul.woff2>; rel=preload; as=font",
                "Link: <https://fonts.gstatic.com/s/spectral/v4/rnCs-xNNww_2s0amA9vmtm3BafaPWnII.woff2>; rel=preload; as=font"
              )
            : headers
      }
    }
  ]
};
