/// <reference types="cypress" />

describe("Handling Data from tables", () => {
	it("Handling table, EXTRACT ALL NUMBERS FROM TABLE", () => {
		cy.visit("https://webdriveruniversity.com/Data-Table/index.html")
		var userDetails = []
		let num = 0
		cy.get("#thumbnail-1 td")
			.each(($el, index, $list) => {
				userDetails[index] = $el.text()
			})
			.then(() => {
				var i
				for (i = 0; i < userDetails.length; i++) {
					//cy.log(userDetails[i])
					if (Number(userDetails[i])) {
						num += Number(userDetails[i])
					}
				}
				cy.log(num)
				expect(num).is.eq(322)
			})
	})

	it("Handling table, Age of given user based on LAST NAME", () => {
		cy.visit("https://webdriveruniversity.com/Data-Table/index.html")
		cy.get("#thumbnail-1 tr td:nth-child(2)").each(($el, index, $list) => {
			const text = $el.text()
			if (text.includes("Woods")) {
				cy.get("#thumbnail-1 tr td:nth-child(2)")
					.eq(index)
					.next()
					.then(age => {
						//using next to travel to next element
						const userAge = age.text()
						expect(userAge).to.equal("80")
					})
			}
		})
	})
})
