/// <reference types="cypress" />

describe('Chai Assertations ', () => {
    //  https://www.chaijs.com/

    it('Assertations element', function () {
        // https://docs.cypress.io/guides/references/assertions#Chai-jQuery
        //cy.contains("Makeup").should("have.text", "Makeup")
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")
        cy.get("#ContactUsFrm_email").should("have.attr", "name", "email")
    })

    it('document() ,  title() command', function () {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.document().should("have.property", "charset").and("eq", "UTF-8")
        cy.title().should("include", "Contact Us")
    })

})