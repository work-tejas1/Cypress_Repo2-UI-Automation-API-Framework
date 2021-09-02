/// <reference types="cypress" />

describe('Custom Commands example', () => {
    
    it('Custom command example 1', function () {
        cy.visit("https://automationteststore.com/")
        cy.selectProduct("Flash Bronzer Body Gel")
    })

    it('Custom command example 2 pass paramater', function () {
        cy.visit("https://automationteststore.com/")
        cy.selectProduct("Skinsheen Bronzer Stick")
    })

})