/// <reference types="cypress" />

import homePage from '../pages/homePage';

describe('Login Validation For Users', () => {
  it('Navigating to HomePage', () => {
    homePage.open(Cypress.env('homePage'));
    cy.validUrl('exercise', Cypress.env('homePage'));
  });
});
