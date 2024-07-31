const path = require("path");
const loader = require("ts-loader");
const { Extension } = require("typescript");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.ts"),
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      }, {
        test: /\.png?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx']
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, "dist")
  },
  plugins: []
};
