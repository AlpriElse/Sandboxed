const path = require('path')

module.exports = {
  entry: {
    file1: './src/file1.js',
    file2: './src/file2.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}