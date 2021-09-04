/// <reference types="cypress" />

describe("AutoComplete", () => {
	it("Contact us positive Test", function () {
		cy.visit(
			"https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html"
		)
		cy.get("#myInput").type("A")
		//cy.get(".autocomplete-items > *") or use this
		cy.get(".autocomplete-items div")
			.each(($ele, index, list) => {
				const fruitsAll = $ele.text()
				const desiredFruitText = "Apple"
				if (fruitsAll === desiredFruitText) {
					$ele.trigger("click")
					cy.get("#submit-button").click()
					cy.url().should("contain", "Apple")
				}
			})
			.then(() => {
				cy.get("#myInput").type("G")
				cy.get(".autocomplete-items div").each(($ele, index, list) => {
					const fruitsAll = $ele.text()
					const desiredFruitText = "Grapes"
					if (fruitsAll === desiredFruitText) {
						$ele.trigger("click")
						cy.get("#submit-button").click()
						cy.url().should("contain", "Grapes")
					}
				})
			})
	})
})
