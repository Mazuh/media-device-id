const path = require('path');

module.exports = {
  entry: './src/media-device-id.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'media-device-id.min.js',
  },
};
