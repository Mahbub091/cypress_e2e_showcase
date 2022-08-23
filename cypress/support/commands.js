require('cypress-downloadfile/lib/downloadFileCommand');
require('cy-verify-downloads').addCustomCommand();


Cypress.Commands.add("validUrl", (partialUrl, fullUrl) => {
    cy.url()
      .then((value) => {
        cy.log("Current Url Is: ", value);
      })
      .should("include", partialUrl)
      .should("eq", fullUrl);
  
    cy.request(fullUrl).should((response) => {
      expect(response.status).to.eq(200);
    });
  });
