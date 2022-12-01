/// <reference types="cypress" />

import homePage from '../pages/homePage';
import loginPage from '../pages/loginPage';

describe('Login Validation For Users', () => {
  it('Navigating to HomePage', () => {
    homePage.open(Cypress.env('homePage'));
    cy.validUrl('exercise', Cypress.env('homePage'));
  });

  it('Navigating to Sign Up/Login Page', () => {
    homePage
      .signInButton()
      .should('be.visible')
      .should('have.attr', 'href', '/login')
      .should('have.css', '1');

    homePage.signInButton().realClick();

    cy.validUrl('/login', Cypress.env('loginPage'));

    loginPage
      .loginForm()
      .should('be.visible')
      .should('contain.text', 'Login to your account')
      .should('have.class', 'login-form');

    loginPage
      .signUpForm()
      .should('not.be.hidden')
      .should('contain.text', 'New User Signup!')
      .should('have.class', 'signup-form');

    loginPage
      .loginEmail()
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Email Address')
      .type('1234');

    loginPage
      .loginPassword()
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Password')
      .type('zxcv');

    loginPage
      .loginButton()
      .should('be.visible')
      .should('have.class', 'btn btn-default')
      .click();

    loginPage.signUpName().type('mahbub');
    loginPage.signUpPassword().type('1234566');
    loginPage.signUpButton().click();
  });

  it('Checking the Header Items', () => {
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
});
