/// <reference types="cypress" />

import homePage from '../pages/homePage';

describe('HomePage Testing', () => {
  it('Navigate and Validate Home Page', () => {
    homePage.open(Cypress.env('homePage'));
    cy.validUrl('exercise', Cypress.env('homePage'));
  });

  it.skip('Validate Header Menus ', () => {
    const menuClass = [
      'fa fa-home',
      'material-icons card_travel',
      'fa fa-shopping-cart',
      'fa fa-lock',
      'fa fa-list',
      'fa fa-list',
      'fa fa-youtube-play',
      'fa fa-envelope',
    ];

    homePage
      .allHeaderItems()
      .should('be.visible')
      .find('i')
      .each((item, index, list) => {
        expect(list).to.have.lengthOf(8);

        cy.wrap(item).should('have.class', menuClass[index]);
      });

    const menuLinkText = [
      ' Home',
      ' Products',
      ' Cart',
      ' Signup / Login',
      ' Test Cases',
      ' API Testing',
      ' Video Tutorials',
      ' Contact us',
    ];

    homePage.allHeaderItems().each((item, index, list) => {
      expect(list).to.have.lengthOf(8);

      expect(Cypress.$(item).text()).to.eq(menuLinkText[index]);

      cy.wrap(item).should('have.text', menuLinkText[index]);
    });
  });

  it.skip('Validating Category Section', () => {
    homePage
      .categoryItems()
      .should('have.length.at.least', 1)
      .should('be.visible')
      .should('have.lengthOf.gte', 3);

    cy.productCategory(1);
    homePage.categoryProducts().then(($ele) => {
      cy.get($ele).eq(0).should('contain.text', 'Women');
      cy.get($ele).eq(1).should('contain.text', 'Men');
      cy.get($ele).eq(2).should('contain.text', 'Kids');
    });

    cy.productCategoryClick(0, 'Women');
    cy.validatingWomenProductSubcategoryHref(0, /\/category_products\/1/i);
    cy.validatingWomenProductSubcategoryHref(1, /\/category_products\/2/i);
    cy.validatingWomenProductSubcategoryHref(2, /\/category_products\/7/i);

    cy.productCategoryClick(1, 'Men');
    cy.validatingMenProductSubcategoryHref(0, /\/category_products\/3/i);
    cy.validatingMenProductSubcategoryHref(1, /\/category_products\/6/i);

    cy.productCategoryClick(2, 'Kids');
    cy.validatingKidsProductSubcategoryHref(0, /\/category_products\/4/i);
    cy.validatingKidsProductSubcategoryHref(1, /\/category_products\/5/i);
  });

  it.skip('Validating Brands Section', () => {
    cy.contains('Brands').should('be.visible').should('have.text', 'Brands');

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

  it.skip('Validating images', () => {
    cy.get('img')
      .should('be.visible')
      .each(($img) => {
        const message = $img.parent().parent().text();
        expect($img, message).to.not.have.attr('src', '#undefined');
      });
  });

  it('Cross validating Image', () => {
    homePage
      .shirtPic()
      .should('be.visible')
      .should((img) => {
        expect(img.width).to.be.greaterThan(0);
        expect(img.height).to.be.greaterThan(0);
      });
  });
});
