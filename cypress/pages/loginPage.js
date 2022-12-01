/// <reference types="cypress" />

class LoginPage {
  loginForm() {
    return cy.get(".login-form");
  }

  signUpForm() {
    return cy.get(".signup-form");
  }

  contains(text) {
    return cy.contains(text);
  }

  loginEmail() {
    return cy.get("input[data-qa='login-email']");
  }

  loginPassword() {
    return cy.get("input[placeholder='Password']");
  }

  loginButton() {
    return cy.get("button[data-qa='login-button']");
  }

  signUpName() {
    return cy.get("input[placeholder='Name']");
  }

  signUpPassword() {
    return cy.get("input[data-qa='signup-email']");
  }

  signUpButton() {
    return cy.get("button[data-qa='signup-button']");
  }

  loginUser() {
    return cy.get(":nth-child(10) > a");
  }

  incorrectUserError() {
    return cy.get("[action] p");
  }
}

export default new LoginPage();
