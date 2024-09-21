/// <reference types="cypress" />


describe('E-commerce Site Login Test', () => {

    // Run this before each test to visit the website
    beforeEach(() => {
        cy.visit(Cypress.env('TEST'));
    });

    it('Logs in using valid credentials', () => {
        cy.get("div#widget-navbar-217834 > ul > li:nth-of-type(6) > a[role='button']  .title").click();

        cy.get('input#input-email').type(Cypress.env('USER'));
        cy.get('input#input-password').type(Cypress.env('PASSWORD'));

        cy.get('[action] .btn-primary').click();

        cy.url().should('include', '/account');
        cy.get('aside#column-right > div > a:nth-of-type(14)').should('contain', 'Logout');
  
    });

    it('Fails to log in with invalid credentials', () => {
        cy.get("div#widget-navbar-217834 > ul > li:nth-of-type(6) > a[role='button']  .title").click();

        cy.get('input#input-email').type(Cypress.env('WRONGUSER'));
        cy.get('input#input-password').type(Cypress.env('WRONGPASSWORD'));

        cy.get('[action] .btn-primary').click();

        cy.get('.alert-danger').should('contain', 'Warning: No match for E-Mail Address and/or Password.');

    });
});
