/// <reference types="cypress" />

describe('ViewPort MouseActions Test', () => {
    const sizes = ['iphone-xr', 'samsung-note9']

    sizes.forEach((size) => {
        // an array of different viewports

        it.skip(`${size}_App test using view port`, function () {

            if (Cypress._.isArray(size)) {
                cy.viewport(size[0], size[1])
            } else {
                cy.viewport(size)
            }
            cy.visit("https://www.amazon.com/")

        })

        it(`${size}_App test using view port`, function () {

            if (Cypress._.isArray(size)) {
                cy.viewport(size[0], size[1])
            } else {
                cy.viewport(size)
            }
            cy.visit("https://www.amazon.com/")
        })

    })

})