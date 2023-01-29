/// <reference types="cypress" />
//This test will create random user by using Faker data then will verify the random account.

import homepage from "../pages/homePage"
import baseFunc from "../pages/functions"
import loginPage from "../pages/loginPage"
import signUpPage from "../pages/signUpPage"
import utils from "../support/utils"
import credUtils from "../support/credentialUtils"
import { faker } from "@faker-js/faker"
import test from "../support/testUtils"

describe("Random User Verification", () => {
	it("Navigating To The Webpage", () => {
		cy.visit("/")
	})
	it("Homepage Navigation Verification", () => {
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
	it("New User SignUp is visible", () => {
		cy.contains("New User Signup!")
			.should("be.visible")
			.should("have.text", "New User Signup!")
	})
	it("Enter name and email address", () => {
		const randomAccountName = faker.name.fullName()
		const randomEmail = faker.name.firstName() + "@mail.com"
		loginPage
			.signUpName()
			.should("be.visible")
			.should("have.attr", "placeholder", "Name")
			.type(randomAccountName)

		loginPage
			.signUpPassword()
			.should("be.visible")
			.should("have.attr", "placeholder", "Email Address")
			.type(randomEmail)
	})

	it("Click Signup button", () => {
		loginPage
			.signUpButton()
			.should("not.be.hidden")
			.should("have.class", "btn btn-default")
			.should("have.attr", "type", "submit")
			.should("be.enabled")
			.realClick()

		cy.url().then(url => {
			expect(url).to.contain("/signup")
		})

		homepage.signInButton().then(btn => {
			expect(btn).to.have.css("color", "rgb(255, 165, 0)")
		})
	})

	it("Verify navigation to desired Page", () => {
		signUpPage.enterAccountInformation().then(text => {
			expect(text).to.be.visible
			expect(text).to.have.text("Enter Account Information")
			expect(text).to.have.css("color", utils.orangeColor)
		})
	})

	it("Validate and Input title section", () => {
		signUpPage.titleRadioButton().then($btn => {
			expect($btn).to.be.visible
			cy.get($btn)
				.eq(0)
				.should("have.attr", "value", "Mr")
				.realHover()
				.realClick()
			cy.get($btn)
				.eq(1)
				.should("have.attr", "value", "Mrs")
				.realHover()
				.realClick()
		})
	})

	it("Entering Infos on SignUp form", () => {
		signUpPage.passwordInputField().clear().realType(credUtils.password)

		signUpPage
			.dayField()
			.select("27")
			.then($day => {
				expect($day).to.have.value("27")
			})

		signUpPage
			.monthField()
			.select("October")
			.then($month => {
				expect($month).to.have.value("10")
			})

		signUpPage
			.yearField()
			.select("1991")
			.then($year => {
				expect($year).to.have.value("1991")
			})
	})

	it("Validating Checkbox", () => {
		signUpPage.newsLetterCheckbox().check().should("be.checked")
		signUpPage.specialOffersCheckbox().check().should("be.checked")
	})

	it("Address Info Field", () => {
		const firstName = faker.name.firstName()
		const lastName = faker.name.lastName()
		const companyName = faker.company.name()
		const addressOne = faker.address.buildingNumber()
		const address2 = faker.address.streetAddress()
		const country = faker.address.country()
		const state = faker.address.state()
		const city = faker.address.cityName()
		const zipCode = faker.address.zipCode()
		const mobileNo = faker.phone.number()

		signUpPage.firstNameField().type(firstName)

		signUpPage.lastNameField().type(lastName)

		signUpPage.companyField().type(companyName)

		signUpPage.addressField().type(addressOne)

		signUpPage.address2Field().type(address2)

		signUpPage.countryField().select(utils.country)

		signUpPage.stateField().type(state)

		signUpPage.cityField().type(city)

		signUpPage.zipCodeField().type(zipCode)

		signUpPage.mobileNoField().type(mobileNo)
	})

	it("Click Create Account Button", function () {
		cy.randomUserStore()

		signUpPage
			.createAccountButton()
			.should("be.visible")
			.should("have.html", "Create Account")
			.click()

		signUpPage.accountCreationSuccessMessage()

		signUpPage.continueButtonClick()
	})

	it("Verifying User Creation and Login", function () {
		test.runnerLog(this.randomUserName)

		homepage.loginUser().contains(this.randomUserName)
		test.eleByContains("Delete Account").should("be.visible").realClick()
		test.eleByContains("Continue").should("be.visible").realClick()

		homepage.loginUser().should("not.exist")
	})
})
