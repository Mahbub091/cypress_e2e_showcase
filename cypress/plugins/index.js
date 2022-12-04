/// <reference types="cypress" />
// ***********************************************************

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config) => {
  require('cypress-mochawesome-reporter/plugin')(on);
  allureWriter(on, config);
};
