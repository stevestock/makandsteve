var webpack = require('webpack');
var path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    bundle: './resources/assets/js/index.js'
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: require.resolve('outdatedbrowser'),
        use: 'exports-loader?outdatedBrowser'
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: 'file-loader?name=[name].[ext]&publicPath=../&outputPath=fonts/'
      },
      {
        test: /\.(jpg|png)$/,
        use: 'file-loader?name=[name].[ext]&publicPath=../&outputPath=img/'
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname), 'node_modules']
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery'
    }),
    new ExtractTextPlugin('css/style.css')
  ]
};
