const { environment } = require('@rails/webpacker')
const typescript =  require('./loaders/typescript')
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

module.exports = environment
