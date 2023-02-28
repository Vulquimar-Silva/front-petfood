module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      parserOpts: {
        plugins: ["jsx"]
      },
      // your babel options
      presets: ["@babel/preset-react"],
    },
  },
};