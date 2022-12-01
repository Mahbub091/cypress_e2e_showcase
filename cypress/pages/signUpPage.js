/// <reference types="cypress" />

class SignUpPage {
  /** Account Info Field */

  enterAccountInformation() {
    return cy.get(".login-form .text-center:nth-child(1) b");
  }

  titleRadioButton() {
    return cy.get("input[type='radio']");
  }

  nameInputField() {
    return cy.get("input[data-qa='name']");
  }

  emailInputField() {
    return cy.get("input[data-qa='email']");
  }

  passwordInputField() {
    return cy.get("input[data-qa='password']");
  }

  dayField() {
    return cy.get("select[data-qa='days']");
  }

  monthField() {
    return cy.get("select[data-qa='months']");
  }

  yearField() {
    return cy.get("select[data-qa='years']");
  }

  newsLetterCheckbox() {
    return cy.get("input#newsletter");
  }

  specialOffersCheckbox() {
    return cy.get("input#optin");
  }

  /** Address Information */

  firstNameField() {
    return cy.get("input[data-qa='first_name']");
  }

  lastNameField() {
    return cy.get("input[data-qa='last_name']");
  }

  addressField() {
    return cy.get("input[data-qa='address']");
  }

  address2Field() {
    return cy.get("input[data-qa='address2']");
  }

  companyField() {
    return cy.get("input[data-qa='company']");
  }

  countryField() {
    return cy.get("select[data-qa='country']");
  }

  stateField() {
    return cy.get("input[data-qa='state']");
  }

  cityField() {
    return cy.get("input[data-qa='city']");
  }

  zipCodeField() {
    return cy.get("input[data-qa='zipcode']");
  }

  mobileNoField() {
    return cy.get("input[data-qa='mobile_number']");
  }

  createAccountButton() {
    return cy.get("button[data-qa='create-account']");
  }

  loginText() {
    return cy.get(".login-form h2");
  }
}

export default new SignUpPage();
