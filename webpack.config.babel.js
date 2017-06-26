import webpack from 'webpack';

const dev = JSON.parse(process.env.BUILD_DEV || 'false');

module.exports = {
  entry: './src/js/main.js',

  output: {
    path: `${__dirname}/dst/`,
    publicPath: '/',
    filename: '[name].js',
  },

  module: {
    loaders: [
      {
        test: /\.(vs|fs)$/,
        exclude: /node_modules/,
        loader: 'raw-loader'
      },
      {
        test: /\.(vs|fs)$/,
        exclude: /node_modules/,
        loader: 'glslify-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          plugins: [
            'syntax-object-rest-spread',
            'transform-object-rest-spread',
          ],
        },
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      dev: JSON.stringify(dev),
      'process.env.NODE_ENV': dev ? '"development"' : '"production"',
    }),
  ],
};
