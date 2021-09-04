/// <reference types="cypress" />

describe("Add multiple items to basket", () => {
	before(() => {
		cy.fixture("products").then(data => {
			globalThis.data = data
		})

		cy.visit("https://automationteststore.com/")
		cy.get(".categorymenu").contains("Hair Care").click()
	})

	it("Add items to basket", function () {
		//commands.js
		globalThis.data.productName.forEach(function (element) {
			cy.addProductToBasket(element)
		})
		cy.contains("Cart").click()
		cy.get(".product-list").should("not.be.null")
	})
})
