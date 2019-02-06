// process.env.NODE_ENV = process.env.NODE_ENV || 'development'

// const environment = require('./environment')

// module.exports = environment.toWebpackConfig()



const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const environment = require('./environment');

environment.plugins.prepend(
  'HardSourceWebpackPlugin',
  new HardSourceWebpackPlugin(),
);

const devEnvironment = environment.toWebpackConfig();

module.exports = devEnvironment;
