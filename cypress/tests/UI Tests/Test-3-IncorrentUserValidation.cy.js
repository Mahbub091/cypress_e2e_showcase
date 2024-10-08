/// <reference types="cypress" />

import homepage from "../../pages/homePage"
import baseFunc from "../../pages/functions"
import loginPage from "../../pages/loginPage"
import signUpPage from "../../pages/signUpPage"
import utils from "../../support/utils"
import credUtils from "../../support/credentialUtils"

describe("Incorrect Login Validation", () => {
	it("Navigating to the website", () => {
		cy.visit(Cypress.env('AUTOMATIONEXERCISE'))
	})

	it("Homepage navigation verification", () => {
		cy.validUrl("exercise", credUtils.homePage)
		baseFunc.ValidatePageTitle("Automation Exercise")
	})

	it("Click On Signup/Login Button", () => {
		homepage
			.signInButton()
			.should("be.visible")
			.then(btn => {
				expect(btn).to.have.attr("href", "/login")
			})
			.realHover()
			.realClick()
	})

	it("Verify 'Login to your account' is visible", () => {
		signUpPage
			.loginText()
			.should("be.visible")
			.should("have.text", "Login to your account")
	})

	it("Enter name and email address", () => {
		loginPage
			.loginEmail()
			.should("be.visible")
			.should("have.attr", "placeholder", "Email Address")
			.type(utils.randomEmail)

		loginPage
			.loginPassword()
			.should("be.visible")
			.should("have.attr", "placeholder", "Password")
			.type(utils.randomPassword)
	})

	it("Clicking 'Login' Button", () => {
		loginPage
			.loginButton()
			.should("be.visible")
			.should("have.text", "Login")
			.realClick()

		loginPage
			.incorrectUserError()
			.should("be.visible")
			.should("have.text", "Your email or password is incorrect!")
	})
})
