const { environment, config } = require('@rails/webpacker')
const typescript =  require('./loaders/typescript')
const webpack = require('webpack')
const { resolve } = require('path')

environment.loaders.append('typescript', typescript)

environment.loaders.append('html', {
  test: /\.html$/,
  use: 'html-loader'
})

environment.loaders.insert('sass', {
    test: /\.scss$/,
    use: [
      'to-string-loader',
      'css-loader',
      'sass-loader'
    ]
});

environment.plugins.append('ContextReplacement',
  new webpack.ContextReplacementPlugin(
    /angular(\\|\/)core(\\|\/)(@angular|fesm5)/,
    resolve(config.source_path)
  )
)

module.exports = environment
