/// <reference types="cypress" />
// ***********************************************************

/**
 * @type {Cypress.PluginConfig}
 */
const { isFileExist, findFiles } = require('cy-verify-downloads');
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');
module.exports = (on, config) => {
  on('task', { downloadFile });
  on('task', { isFileExist, findFiles });
  on('task', { deleteDownloads(){
    console.log('deleting downloads')
      return new Promise((resolve) => {
        rmdir('cypress/downloads', { recursive: true }, () => {
          resolve(null)
        })
      })
  } });
};
