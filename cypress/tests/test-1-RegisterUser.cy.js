/// <reference types="cypress" />

import homepage from "../pages/homePage";
import baseFunc from "../pages/functions";
import loginPage from "../pages/loginPage";
import signUpPage from "../pages/signUpPage";
import utils from "../support/utils";

describe("Register User on page", () => {
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

  it("New User SignUp is visible", () => {
    cy.contains("New User Signup!")
      .should("be.visible")
      .should("have.text", "New User Signup!");
  });

  it("Enter name and email address", () => {
    loginPage
      .signUpName()
      .should("be.visible")
      .should("have.attr", "placeholder", "Name")
      .type(utils.randomAccountName);

    loginPage
      .signUpPassword()
      .should("be.visible")
      .should("have.attr", "placeholder", "Email Address")
      .type(utils.randomEmail);
  });

  it("Click Signup button", () => {
    loginPage
      .signUpButton()
      .should("not.be.hidden")
      .should("have.class", "btn btn-default")
      .should("have.attr", "type", "submit")
      .should("be.enabled")
      .realClick();

    cy.url().then((url) => {
      expect(url).to.contain("/signup");
    });

    homepage.signInButton().then((btn) => {
      expect(btn).to.have.css("color", "rgb(255, 165, 0)");
    });
  });

  it("Verify navigation to desired Page", () => {
    signUpPage.enterAccountInformation().then((text) => {
      expect(text).to.be.visible;
      expect(text).to.have.text("Enter Account Information");
      expect(text).to.have.css("color", utils.orangeColor);
    });
  });

  it("Validate and Input title section", () => {
    signUpPage.titleRadioButton().then(($btn) => {
      expect($btn).to.be.visible;
      cy.get($btn)
        .eq(0)
        .should("have.attr", "value", "Mr")
        .realHover()
        .realClick();
      cy.get($btn)
        .eq(1)
        .should("have.attr", "value", "Mrs")
        .realHover()
        .realClick();
    });
  });

  it("Entering Infos on SignUp form", () => {
    signUpPage.passwordInputField().clear().realType(Cypress.env("password"));

    signUpPage
      .dayField()
      .select("27")
      .then(($day) => {
        expect($day).to.have.value("27");
      });

    signUpPage
      .monthField()
      .select("October")
      .then(($month) => {
        expect($month).to.have.value("10");
      });

    signUpPage
      .yearField()
      .select("1991")
      .then(($year) => {
        expect($year).to.have.value("1991");
      });
  });

  it("Validating checkbox", () => {
    signUpPage.newsLetterCheckbox().check().should("be.checked");
    signUpPage.specialOffersCheckbox().check().should("be.checked");
  });

  it("Address Info Field", () => {
    signUpPage.firstNameField().type(utils.firstName);

    signUpPage.lastNameField().type(utils.lastName);

    signUpPage.companyField().type(utils.companyName);

    signUpPage.addressField().type(utils.address);

    signUpPage.address2Field().type(utils.address2);

    signUpPage.countryField().select(utils.country);

    signUpPage.stateField().type(utils.state);

    signUpPage.cityField().type(utils.city);

    signUpPage.zipCodeField().type(utils.zipCode);

    signUpPage.mobileNoField().type(utils.mobileNo);
  });

  it("Click create account button", () => {
    signUpPage
      .createAccountButton()
      .should("be.visible")
      .should("have.html", "Create Account")
      .click();

    cy.contains("Account Created").should("exist");

    cy.contains("Continue").click();
  });

  it("Username validation & delete", () => {
    cy.get(".navbar-nav > li:nth-child(10) > a:nth-child(1)").should(
      "contain.text",
      "Logged in as",
    );

    cy.contains("Delete Account").click();
    cy.contains("Continue").click();
  });
});
