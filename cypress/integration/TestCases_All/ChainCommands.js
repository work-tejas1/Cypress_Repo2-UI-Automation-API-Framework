/// <reference types="cypress" />

describe('Chain cypress Commands', () => {
   
    it('chaining commands', function () {
        // https://docs.cypress.io/guides/references/assertions#Chai-jQuery
        //cy.contains("Makeup").should("have.text", "Makeup")
        cy.visit("https://automationteststore.com/")
        cy.get(".fixed_wrapper").find(".prdocutname").eq(0).click()
    })

})