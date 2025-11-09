const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: 'test/cypress/e2e/**/*.cy.js',
    supportFile: 'test/cypress/support/e2e.js',
    screenshotsFolder: 'test/cypress/reports/screenshots',
    videosFolder: 'test/cypress/reports/videos',
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'test/cypress/reports/mochawesome',
    overwrite: false,
    html: true,
    json: true
  }
});