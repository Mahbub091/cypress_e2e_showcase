/// <reference types="cypress" />

class HomePage {
  open(pageUrl) {
    return cy.visit(pageUrl);
  }
}

export default new HomePage();
