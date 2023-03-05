/// <reference types="cypress" />

import homepage from "../../pages/homePage"
import baseFunc from "../../pages/functions"
import loginPage from "../../pages/loginPage"
import signUpPage from "../../pages/signUpPage"
import utils from "../../support/utils"
import credUtils from "../../support/credentialUtils"

describe("Test Case 4: Logout User", () => {
	it("Navigating to the URL", () => {
		cy.visit("/")
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
			.type(utils.accountEmail)

		loginPage
			.loginPassword()
			.should("be.visible")
			.should("have.attr", "placeholder", "Password")
			.type(utils.accountPassword)
	})

	it("Clicking 'Login' Button", () => {
		loginPage
			.loginButton()
			.should("be.visible")
			.should("have.text", "Login")
			.realClick()
	})

	it("Verify logged in as desired user", () => {
		loginPage.loginUser().should("contain.text", " Logged in as robert")
	})

	it("Logging out", () => {
		cy.contains(" Logout").click()
	})
})
