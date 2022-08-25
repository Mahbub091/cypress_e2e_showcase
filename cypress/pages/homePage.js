/// <reference types="cypress" />

class HomePage {
  open(pageUrl) {
    return cy.visit(pageUrl);
  }

  signInButton() {
    return cy.get("a[href='/login']");
  }

  allHeaderItems() {
    return cy.get("header[id='header'] li");
  }
}

export default new HomePage();
