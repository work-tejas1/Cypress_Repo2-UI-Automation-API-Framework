/// <reference types="cypress" />

describe("TestCase_1", () => {
	before(() => {
		// runs once before all tests in the block  //Resolve promise is important
		// cy.fixture('data').then(function (data) {
		//     this.data = data  //this keyboard refers to whole class. This changes Scope to entire class
		// })
	})

	it("Contact us positive Test", function () {
		cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
		cy.url().should("contain", "contactus")
		cy.get("[name='first_name']")
			.type("Slow Typing", { delay: 70 })
			.should("have.value", "Slow Typing")

		/* Future Use Code
        cy.visit(Cypress.env('URL'))
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.pause()
            cy.customCommand1()  // can be used for repetative code
            //this data is array 

            //for each way2 implementation
            this.data.card.forEach(cardDetails => cy.log(cardDetails));

            forEach way1 implementation
            this.data.card.forEach(function(cardDetails) {
              cy.log(cardDetails)
            });
        })
        //How to use x-path
        /*  cy.xpath('//*[contains(@class,"Nickname")]').then(function(Nickname)
         {
             cy.log(Nickname.text())
         }) */
	})
})
