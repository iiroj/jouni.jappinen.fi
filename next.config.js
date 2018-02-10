module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/pajan-hamarasta/": { page: "/pajan-hamarasta/" },
      "/ikuiset-seprat/": { page: "/ikuiset-seprat/" },
    };
  },
  webpack(config, options) {
    const { dev } = options;

    if (!dev) {
      config.devtool = "source-map";
    }

    return config;
  },
};
