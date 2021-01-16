var path = require('path');

module.exports = {
  mode: 'development',
  entry: './app/javascript/packs/movie_app.jsx',
  output: {
    filename: './bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*'],
  }
};