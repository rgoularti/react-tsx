module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{tsx}', '!**/node_modules/**', '!**/build/**'],
  coverageThreshold: {
    global: {},
  },
};
