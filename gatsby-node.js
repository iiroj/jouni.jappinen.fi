exports.modifyWebpackConfig = ({ config }) => {
  config.merge({
    resolve: {
      root: `${__dirname}/src`,
      extensions: ["", ".js"]
    }
  });
  config.loader("pdf", {
    test: /\.pdf$/,
    loaders: ["file"]
  });
};
