/// <reference types="cypress" />

describe('Basic Auth login', () => {

    it('basic auth login Test', () => {
       
        cy.clearLocalStorage()
        cy.clearCookies()
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.contains("Basic Auth").should("not.be.null")
    })

    

})