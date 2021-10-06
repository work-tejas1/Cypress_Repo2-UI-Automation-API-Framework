/// <reference types="cypress" />
import PageNav from '../../support/pageObjects/PageNav'
import ContactUs from '../../support/pageObjects/ContactUs'

describe('TestCase 1 pageobject Demo', () => {
    const pageNav = new PageNav()
    const contactUs = new ContactUs()

    before(() => {
        cy.visit(Cypress.env('webUniUrl') + pageNav.contactUsUrl())
    })

    it('Contact us positive Test', function () {
        contactUs.firstName().type("First name slow Typing", { delay: 70 }).should("have.value", "First name slow Typing")
        contactUs.lastName().type("last name").should("have.value", "last name")
        contactUs.email().type("email@domail.com")
        contactUs.message().type("Test comment") //timeout 12000 ms
    })

})