/// <reference types="cypress" />

describe("APi Tests", () => {
	var results

	it("Get Results", function () {
		results = cy.request("http://localhost:3000/posts")
		results.its("status").should("equal", 200)
	})

	it("Validate API contains", function () {
		cy.request({
			method: "GET",
			url: "http://localhost:3000/posts",
			headrs: {
				accept: "application/json",
			},
		}).then(response => {
			let body = JSON.parse(JSON.stringify(response.body))
		})
		// cy.log(body)
		expect(body[0]).has.property("id", "1")

		body.forEach(function (item) {
			expect(item).to.have.all.keys("id", "title", "author")
		})
	})
})
