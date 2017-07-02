exports.modifyWebpackConfig = ({config}) => {
  config.merge({
    resolve: {
      root: `${__dirname}/src`,
      extensions: ['', '.js', '.jsx', '.json', '.css', '.module.css']
    }
  })
  config.loader('pdf', {
    test: /\.pdf$/,
    loaders: ['file']
  })
}
