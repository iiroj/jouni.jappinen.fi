exports.modifyWebpackConfig = ({ config }) => {
  config.merge({
    resolve: {
      root: `${__dirname}/src`,
      extensions: ['', '.js'],
    },
  });
};
