/// <reference types="cypress" />

describe("Itrate each item, Alias, invoke", () => {
	//  https://docs.cypress.io/guides/guides/web-security#Same-superdomain-per-test
	// https://docs.cypress.io/guides/guides/web-security#Disabling-Web-Security

	it("navigates", () => {
		cy.visit("https://www.cypress.io")
		cy.visit("https://docs.cypress.io") // yup all good
	})

	it("navigates", () => {
		cy.visit("https://apple.com")
		cy.visit("https://www.cypress.io") // this will error
	})

	it("navigates", () => {
		cy.visit("https://apple.com")
	})
	// split visiting different origin in another test
	it("navigates to new origin", () => {
		cy.visit("https://duckduckgo.com") // yup all good
	})
})
