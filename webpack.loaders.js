module.exports = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel',

  },
  {
    test: /\.css$/,
    loaders: ['style', 'css?sourceMap']
  },
  {
      test: /\.json$/,
      loader: 'json'
  }
];
