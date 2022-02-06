/// <reference types="cypress" />

describe('study driver login', () => {
  before(function () {
    cy.visit('https://www.studydrive.net/')
    cy.loginUser('studydrive_interview1@gmx.net', 'Password123')
  })

  // preserve the session cookie before each test
  // Try to use preserve cookie in beforeEach block
  beforeEach(function () {
    Cypress.Cookies.preserveOnce('sd_session')
  })

  it('preserve cookie demo', () => {
    cy.get("[class*='flex flex-wrap w-full']").should('have.length', 3)
  })
})
