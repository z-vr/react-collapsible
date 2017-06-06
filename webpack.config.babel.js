import path from 'path';

module.exports = {
  entry: './example/index.js',
  output: {
    filename: 'example/build/app.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [['es2015', {modules: false}]],
        }
      }]
    }]
  },
};