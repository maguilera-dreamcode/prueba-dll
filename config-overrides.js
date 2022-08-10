// config-overrides.js
module.exports = function override(config, env) {
  // New config, e.g. config.plugins.push...
  resolve: {
    fallback: {
      assert: require.resolve("assert"),
      crypto: require.resolve("crypto-browserify"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      os: require.resolve("os-browserify/browser"),
      stream: require.resolve("stream-browserify"),
    },
  },
  return config;
};
