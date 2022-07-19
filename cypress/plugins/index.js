/// <reference types="cypress" />
// ***********************************************************
require('cypress-xpath');

/**
 * @type {Cypress.PluginConfig}
 */

const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');
module.exports = (on, config) => {
  on('task', { downloadFile });
};

const { isFileExist, findFiles } = require('cy-verify-downloads');
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', { isFileExist, findFiles });
    },
  },
});
