/**
 * @type {import('@rspack/cli').Configuration}
 */

const NodePolyfillPlugin = require("@rspack/plugin-node-polyfill");

module.exports = {
  context: __dirname,
  entry: {
    main: "./src/main.jsx",
  },
  builtins: {
    html: [
      {
        template: "./index.html",
      },
    ],
  },
  resolve: {
    fallback: false,
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: "asset",
      },
    ],
  },
  plugins: [new NodePolyfillPlugin()],
};
