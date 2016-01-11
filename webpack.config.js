var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: './web/static/js/app.jsx'
  },
  output: {
    path: './priv/static/js',
    filename: '[name].js'
  },
  module: {
    preLoaders: [
      { test: /\.jsx?/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      }
    ],
    loaders: [
      /*
      { test: /bootstrap\/js\//,
        loader: 'imports?jQuery=jquery' },
      { test: /\.(png)$/,
        loader: 'url-loader?limit=100000' },
      { test: /\.json$/,
        loader: "json-loader" },
      */
      { test: /\.jsx?$/,
        loader: "babel",
        exclude: /node_modules/,
        query: { presets: ['es2015'] }},
      /*
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader" },
      { test: /\.sass$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader") },
      { test: /\.css/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
      */
    ]
  },
  /*
  plugins: [
    new ExtractTextPlugin('./priv/static/css/app.css', {allChunks: true})
  ],
  */
  resolve: {
    //extensions: ['', '.css', '.js', '.json', '.jsx', '.styl'],
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules']
  }
}
