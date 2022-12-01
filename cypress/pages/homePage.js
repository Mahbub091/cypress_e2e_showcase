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

  categoryItems() {
    return cy.get("[class='panel panel-default']");
  }

  categoryProducts() {
    return cy.get(" .panel-heading > .panel-title > a");
  }

  womenCategorySubProduct() {
    return cy.get("#Women > div:nth-child(1) > ul:nth-child(1) > li > a");
  }

  menCategorySubProduct() {
    return cy.get("#Men > div:nth-child(1) > ul:nth-child(1) > li > a");
  }

  kidsCategorySubProduct() {
    return cy.get("#Kids > div:nth-child(1) > ul:nth-child(1) > li > a");
  }

  brandsCategory() {
    return cy.get(".nav-stacked > li > a");
  }

  shirtPic() {
    return cy.get(
      ":nth-child(4) > .product-image-wrapper > .single-products > .productinfo > img",
    );
  }

  homeMenu() {
    return cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)");
  }
}

export default new HomePage();
