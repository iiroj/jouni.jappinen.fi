const path = require("path");

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
      resolve: "gatsby-plugin-fathom",
      options: {
        trackingUrl: "ping.iiro.fi",
        siteId: "BJRXK"
      }
    }
  ]
};
