const path = require("path");
module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, "src/components/"),
      '@pages': path.resolve(__dirname, "src/pages/"),
      '@libs': path.resolve(__dirname, "src/libs/"),
      '@images': path.resolve(__dirname, "src/assets/images/")
    }
  }
}