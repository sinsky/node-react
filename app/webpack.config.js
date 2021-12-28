var debug = process.env.NODE_ENV !== "production";
var webpack = require("webpack");
var path = require("path");

module.exports = {
  mode: "development",
  context: path.join(__dirname, "src"),
  entry: "./js/client.js",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react", "@babel/preset-env"],
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.join(__dirname, "src"),
    filename: "client.min.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "src"),
    },
    port: 8080,
    hot: true,
  },
  plugins: debug ? [] : [new webpack.optimize.OccurrenceOrderPlugin(), new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })],
};
