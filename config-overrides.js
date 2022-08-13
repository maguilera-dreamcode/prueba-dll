// config-overrides.js
module.exports = function override(config, env) {
  // New config, e.g. config.plugins.push...
  config.resolve.fallback = {
    fs: false,
    path: require.resolve("path-browserify"),
  };
  return config;
};
