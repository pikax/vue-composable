const pkg = require("./package.json");

module.exports = {
  preset: "ts-jest",
  globals: {
    __DEV__: true,
    __VERSION__: pkg.version,
    __VUE_2__: process.env.VUE === "2"
  },
  setupFiles: [
    "<rootDir>/__tests__/setupTest.js",
    "<rootDir>/packages/vue-composable/__tests__/setupTest.js"
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["html", "lcov", "text"],
  collectCoverageFrom: ["src/**/*.ts", "packages/*/src/**/*.ts"],
  watchPathIgnorePatterns: ["/node_modules/"],
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  rootDir: __dirname,
  // testMatch: ["<rootDir>/packages/**/__tests__/**/*spec.[jt]s?(x)"],
  testMatch: ["<rootDir>/packages/vue-composable/__tests__/**/*spec.[jt]s?(x)"]
};
