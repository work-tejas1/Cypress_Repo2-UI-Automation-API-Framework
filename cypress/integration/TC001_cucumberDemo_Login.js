/// <reference types="cypress" />

describe('Saucelab Cucumber demo', () => {
  before(() => {
    cy.visit(Cypress.env('sauceDemo'))
  })

  it('Login with standard user', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('contain', '/invenatory.html')
  })
})
