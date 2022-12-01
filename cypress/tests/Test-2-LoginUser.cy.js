/// <reference types="cypress" />

import homepage from "../pages/homePage";
import baseFunc from "../pages/functions";
import loginPage from "../pages/loginPage";
import signUpPage from "../pages/signUpPage";
import utils from "../support/utils";

describe("Login User With Right Credentials", () => {
  it("Navigating to the website", () => {
    homepage.open(Cypress.env("homePage"));
  });

  it("Homepage navigation verification", () => {
    cy.validUrl("exercise", Cypress.env("homePage"));
    baseFunc.ValidatePageTitle("Automation Exercise");
  });

  it("Click On Signup/Login Button", () => {
    homepage
      .signInButton()
      .should("be.visible")
      .then((btn) => {
        expect(btn).to.have.attr("href", "/login");
      })
      .realHover()
      .realClick();
  });

  it("Verify 'Login to your account' is visible", () => {
    signUpPage
      .loginText()
      .should("be.visible")
      .should("have.text", "Login to your account");
  });

  it("Enter name and email address", () => {
    loginPage
      .loginEmail()
      .should("be.visible")
      .should("have.attr", "placeholder", "Email Address")
      .type(utils.accountEmail);

    loginPage
      .loginPassword()
      .should("be.visible")
      .should("have.attr", "placeholder", "Password")
      .type(utils.accountPassword);
  });

  it("Clicking 'Login' Button", () => {
    loginPage
      .loginButton()
      .should("be.visible")
      .should("have.text", "Login")
      .realClick();
  });

  it("Verify logged in as desired user", () => {
    loginPage.loginUser().should("contain.text", " Logged in as robert");
  });
});
