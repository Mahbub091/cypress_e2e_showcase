/// <reference types="cypress" />

import homePage from "../pages/homePage";

import utils from "../support/utils";

describe("HomePage Testing", () => {
  it("Navigate and Validate Home Page", () => {
    cy.visit(Cypress.env("homePage"));
    cy.validUrl("exercise", Cypress.env("homePage"));
  });

  it("Validate Header Menus ", () => {
    homePage
      .allHeaderItems()
      .should("be.visible")
      .find("i")
      .each((item, index, list) => {
        expect(list).to.have.lengthOf(8);

        cy.wrap(item).should("have.class", utils.menuClass[index]);
      });

    homePage.allHeaderItems().each((item, index, list) => {
      expect(list).to.have.lengthOf(8);

      expect(Cypress.$(item).text()).to.eq(utils.menuLinkText[index]);

      cy.wrap(item).should("have.text", utils.menuLinkText[index]);
    });
  });

  it("Validating Category Section", () => {
    homePage
      .categoryItems()
      .should("have.length.at.least", 1)
      .should("be.visible")
      .should("have.lengthOf.gte", 3);

    cy.productCategory(1);
    homePage.categoryProducts().then(($ele) => {
      cy.get($ele).eq(0).should("contain.text", "Women");
      cy.get($ele).eq(1).should("contain.text", "Men");
      cy.get($ele).eq(2).should("contain.text", "Kids");
    });

    cy.productCategoryClick(0, "Women");
    cy.validatingWomenProductSubcategoryHref(0, /\/category_products\/1/i);
    cy.validatingWomenProductSubcategoryHref(1, /\/category_products\/2/i);
    cy.validatingWomenProductSubcategoryHref(2, /\/category_products\/7/i);

    cy.productCategoryClick(1, "Men");
    cy.validatingMenProductSubcategoryHref(0, /\/category_products\/3/i);
    cy.validatingMenProductSubcategoryHref(1, /\/category_products\/6/i);

    cy.productCategoryClick(2, "Kids");
    cy.validatingKidsProductSubcategoryHref(0, /\/category_products\/4/i);
    cy.validatingKidsProductSubcategoryHref(1, /\/category_products\/5/i);
  });

  it("Validating Brands Section", () => {
    cy.contains("Brands").should("be.visible").should("have.text", "Brands");

    cy.brandsCategory(5);

    cy.validatingBrandsSubcategoryHref(0, /\/brand_products\/Polo/i);
    cy.validatingBrandsSubcategoryHref(1, /\/brand_products\/H&M/i);
    cy.validatingBrandsSubcategoryHref(2, /\/brand_products\/Madame/i);
    cy.validatingBrandsSubcategoryHref(3, /\/brand_products\/Mast & Harbour/i);
    cy.validatingBrandsSubcategoryHref(4, /\/brand_products\/Babyhug/i);
    cy.validatingBrandsSubcategoryHref(
      5,
      /\/brand_products\/Allen Solly Junior/i,
    );
    cy.validatingBrandsSubcategoryHref(6, /\/brand_products\/Kookie Kids/i);
    cy.validatingBrandsSubcategoryHref(7, /\/brand_products\/Biba/i);
  });

  it("Validating images", () => {
    cy.get("img")
      .should("be.visible")
      .each(($img) => {
        const message = $img.parent().parent().text();
        expect($img, message).to.not.have.attr("src", "#undefined");
      });
  });
});
