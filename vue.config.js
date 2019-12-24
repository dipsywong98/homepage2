const path = require("path");
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/homepage2/" : "/",
  outputDir: path.resolve(__dirname, "docs/")
};
