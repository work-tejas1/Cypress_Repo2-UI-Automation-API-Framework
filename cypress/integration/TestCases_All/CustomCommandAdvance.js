/// <reference types="cypress" />

describe("Custom command advance/framework", () => {
	before(() => {
		cy.fixture("UserData").then(function (data) {
			globalThis.data = data
			cy.log("only run once")
		})
	})

	it("Custom commands with parameters ", () => {
		cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
		//custom command with parameters
		cy.webDriverUni_ContactUs(
			data.firstName,
			data.lastName,
			data.emailValue,
			"[name='email']"
		)
	})
})
