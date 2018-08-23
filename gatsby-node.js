const isProduction = process.env.NODE_ENV === 'production';

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: 'babel-plugin-emotion',
    options: {
      autolabel: !isProduction,
      hoist: isProduction,
      sourceMap: !isProduction
    }
  });
};
