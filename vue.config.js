const path = require("path");
console.log(process.env.NODE_ENV)
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/homepage2/" : "/",
  outputDir: path.resolve(__dirname, "dist/")
};
