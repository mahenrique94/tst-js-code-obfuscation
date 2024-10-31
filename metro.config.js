/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    minifierPath: require.resolve("./code-obfuscator.js"),
    minifierConfig: {
      disableConsoleOutput: false,
      log: true,
    },
  },
  cacheVersion: Object.values(process.env).join(""),
};

module.exports = config;
