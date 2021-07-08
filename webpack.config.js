const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV || "production",

  entry: "./src/server.ts",
  target: "node",
  externals: [/^[a-z\-0-9]+$/],
  devtool: false,

  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "commonjs",
  },

  resolve: {
    extensions: [".ts", ".js"],
    modules: [path.resolve(__dirname, "node_modules"), "node_modules"],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
};
