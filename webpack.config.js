module.exports = {
  entry: "./webpack/app.ts",
  output: {
    filename: "./webpack/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader"
      }
    ]
  }
}