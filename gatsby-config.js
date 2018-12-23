const cspConfig = [
  "connect-src 'self' https://fonts.gstatic.com;",
  "default-src 'none';",
  "font-src 'self' https://fonts.gstatic.com;",
  "img-src 'self' data: https://*.cloudfront.net;",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval';",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;"
];

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        headers: {
          "/*": [
            `Content-Security-Policy: ${cspConfig.join(" ")}`,
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
