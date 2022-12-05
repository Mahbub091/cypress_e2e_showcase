const { defineConfig } = require('cypress');

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 60000,
  execTimeout: 60000,
  pageLoadTimeout: 60000,
  requestTimeout: 40000,
  responseTimeout: 40000,
  video: false,
  failOnStatusCode: false,
  viewportHeight: 1200,
  viewportWidth: 1920,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/html',
    charts: true,
    reportPageTitle: 'End-To-End Test Suite',
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  e2e: {
    specPattern: 'cypress/tests/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
  },
});
