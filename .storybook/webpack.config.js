const path = require('path')

module.exports = {
  resolve: {
    alias: {
      theme: path.resolve(__dirname, '../src/theme'),
      utils: path.resolve(__dirname, '../src/utils'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}