const jso = require("javascript-obfuscator");

async function obfuscator({ code, config, filename, ...options }) {
  const result = jso.obfuscate(code, {
    compact: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 0.75,
    disableConsoleOutput: true,
    identifierNamesGenerator: "hexadecimal",
    inputFileName: filename,
    log: false,
    numbersToExpressions: true,
    selfDefending: true,
    simplify: true,
    sourceMap: true,
    splitStrings: true,
    splitStringsChunkLength: 3,
    stringArray: false,
    transformObjectKeys: true,
    unicodeEscapeSequence: true,
    ...config,
  });

  if (!options.map || result.getSourceMap() === null) {
    return { code: result.getObfuscatedCode() };
  }

  return {
    code: result.getObfuscatedCode(),
    map: result.getSourceMap(),
  };
}

module.exports = obfuscator;
