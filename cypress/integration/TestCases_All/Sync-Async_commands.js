/// <reference types="cypress" />

describe('Sync and Async code', () => {
    //nested then is okay to use
    it('sync and promise', function () {
        //cy.visit("https://automationteststore.com/")
        cy.visit("/") //cypress.json baseurl
        cy.get(".categorymenu").contains("Makeup").click()
        cy.get("h1 .maintext").then(($eleText) => {
            const text = $eleText.text()
            cy.log(text)
            //Assertation
            expect(text).is.eq("Makeup")
        })
    })

})