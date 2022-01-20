/// <reference types="cypress" />

describe('Avoid wait examples', () => {
  before(() => {
    cy.clearLocalStorage()
    cy.clearCookies()
    cy.visit('https://filiphric.com/waiting-in-cypress-and-how-to-avoid-it')
  })

  it('handling shadow dom element', () => {
    cy.wait(5000)
  })
})
