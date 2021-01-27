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
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        },
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*'],

  },
  node: {
  }
};