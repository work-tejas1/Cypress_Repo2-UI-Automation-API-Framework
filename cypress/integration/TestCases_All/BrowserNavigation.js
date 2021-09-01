/// <reference types="cypress" />

describe('Browser navigations', () => {

    it('Browser nav ', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get("#contact-us").scrollIntoView().invoke("removeAttr", "target").click()
        cy.url().should("include", "contactus")
        cy.go("back") //"forward"
        cy.url().should("not.include", "contactus")
        cy.reload()
        cy.reload(true) //without using cache
    })

})