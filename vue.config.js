const path = require('path')
console.log(process.env.NODE_ENV)
module.exports = {
  outputDir: path.resolve(__dirname, 'dist/')
}
