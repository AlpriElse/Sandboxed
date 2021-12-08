const path = require('path');

module.exports = {
  entry: './simple-src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'simple-dist'),
  },
};