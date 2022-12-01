/// <reference types="cypress" />

class BasicFunc {
  ValidatePageTitle(title) {
    return cy.title().then((value) => {
      expect(value).to.be.eq(title);
      expect(value).not.to.be.empty;
      expect();
    });
  }
}
export default new BasicFunc();
