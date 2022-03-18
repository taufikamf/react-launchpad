const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
    resolve: {
        alias: {
            path: require.resolve("path-browserify")
        }
    }
};