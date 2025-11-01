const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'test/cypress/e2e/**/*.cy.js',
    supportFile: 'test/cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      return config;
    }
  }
});