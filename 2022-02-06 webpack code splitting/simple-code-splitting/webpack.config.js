const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    // `filename` provides a template for naming your bundles (remember to use `[name]`)
    filename: "[name].bundle.js",
    // `chunkFilename` provides a template for naming code-split bundles (optional)
    chunkFilename: "[name].bundle.js",
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
