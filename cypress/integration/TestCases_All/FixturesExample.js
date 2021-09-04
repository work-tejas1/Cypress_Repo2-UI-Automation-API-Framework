/// <reference types="cypress" />

describe("Fixture and custom commands", () => {
	before(function () {
		cy.fixture("UserData").then(function (data) {
			//this.data = data;
			globalThis.data = data
		})
		cy.visit("https://webdriveruniversity.com/")
		cy.get("#contact-us")
			.scrollIntoView()
			.invoke("removeAttr", "target")
			.click()
	})

	it("Fixtures and custom commands ", () => {
		cy.get("[name='first_name']").type(data.firstName, { delay: 30 })
		cy.get("[name='last_name']").type(data.lastName)
		cy.get("[name='email']").type(data.emailValue)
	})
})
