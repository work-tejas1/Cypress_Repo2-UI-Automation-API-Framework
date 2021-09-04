/// <reference types="cypress" />

describe("Traversing DOM Element in cypress", () => {
	beforeEach(() => {
		cy.visit("https://webdriveruniversity.com/Data-Table/index.html")
	})

	it("Children of DOM element", function () {
		cy.get(".traversal-breadcrumb")
			.children(".active")
			.should("contain", "Contact Us")
	})

	it("Closest to validate closest ancestor DOm element", function () {
		cy.get(".traversal-badge").closest("ul").should("have.class", "list-group")
	})

	it("eq() (first(), last()) to find specific element", function () {
		cy.get(".traversal-drinks-list li").eq(2).should("have.text", "Milk")
	})

	it("filter() to retrive that match speficic selector", function () {
		cy.get(".btn-group-toggle > *")
			.filter(".active")
			.should("have.text", "Button-1")
	})

	it("find() to retrive specific DOM element", function () {
		cy.get(".traversal-pagination")
			.find("li")
			.find("a")
			.should("have.length", 7)
	})

	it("nextall() to get all next siblings", function () {
		cy.get("#tea").nextAll().should("have.length", 3)
	})

	it("nextUntil() to retrive specific DOM element", function () {
		cy.get("#coffee").nextUntil("#milk")
	})

	it("not() to remove DOM element", function () {
		cy.get(".traversal-button-states >*")
			.not(".disabled")
			.should("not.have.class", "disabled")
	})

	it("parent() DOM element locator", function () {
		cy.get(".traversal-mark").parent().should("contain", "Lorem ipsum dolor ")
	})

	it("parents()to get parents DOM element ", function () {
		cy.get(".traversal-cite").parents().should("match", "blockquote")
	})

	it("prev(), prevAll(), prevuntil() to get previous DOM element ", function () {
		cy.get("#sugar").prev().should("have.text", "Espresso")
		cy.get("#sugar").prevAll().should("have.length", 4)
		cy.get("#veggie").prevUntil("#fruits").should("have.length", 5)
	})

	it("sibilings() to get  DOM element", function () {
		cy.get(".traversal-button-other-states .active")
			.siblings()
			.should("have.length", 3)
	})
})
