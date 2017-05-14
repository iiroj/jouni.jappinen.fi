const path = require("path")
const fs = require(`fs-extra`)

exports.modifyWebpackConfig = ({config}) => {
  config.merge({
    resolve: {
      root: `${__dirname}/src`,
      extensions: ['', '.js', '.jsx', '.json', '.css', '.module.css'],
    }
  })
  config.loader('pdf', {
    test: /\.pdf$/,
    loaders: ['file'],
  })
  return
}

exports.postBuild = () => {
  fs.copySync('./src/pages/favicon.ico', './public/favicon.ico')
  fs.copySync('./src/pages/icon.png', './public/icon.png')
}
