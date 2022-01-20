/// <reference types="cypress" />

describe('Accept cookies shadow dom element', () => {
  before(() => {
    cy.clearLocalStorage()
    cy.clearCookies()
    cy.visit(Cypress.env('shareNow'))
    cy.wait(5000)
  })

  it('handling shadow dom element', () => {
    cy.get('#usercentrics-root')
      .shadow()
      .find('[data-testid="uc-deny-all-button"]')
      .click()

    cy.get("[data-test-id='reggie-link-register-now']")
      .should('have.length', '4')
      .first()
      .click()
  })
})
