var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  devtool: "source-map",
  entry: {
    "app": ["./web/static/css/app.scss", "./web/static/js/index.js"],
  },
  output: {
    path: "./priv/static/js",
    filename: "app.js"
  },
  module: {
    loaders: [
      { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
      { test: /\.(png)$/, loader: 'url-loader?limit=100000' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      { test: /\.css/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
      { test: /\.sass$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader") },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel"}
    ]
  },

  plugins: [
    new ExtractTextPlugin("css/app.css"),
    new CopyWebpackPlugin([{ from: "./web/static/assets" }])
  ],

  resolve: {
    extensions: ['', '.css', '.js', '.json', '.jsx', '.styl'],
    modulesDirectories: ['node_modules']
  },
}

//    modulesDirectories: [ __dirname + "/web/static/js" ],
//   { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel", query: {presets: ['es2015', 'react']}},
//   { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel", query: {presets: ['es2015', 'react']}},
