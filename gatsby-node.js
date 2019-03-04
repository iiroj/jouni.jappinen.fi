const isProduction = process.env.NODE_ENV === "production";

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPreset({
    name: "@emotion/babel-preset-css-prop",
    options: {
      autolabel: !isProduction,
      sourceMap: !isProduction
    }
  });

  actions.setBabelPlugin({
    name: "babel-plugin-polished"
  });
};
