/// <reference types="cypress" />

import 'cypress-each'

describe('TestCase 1 pageobject Demo', () => {
  const selector = [
    '[name="first_name1"]', //wrong selector intension
    '[name="last_name"]',
    '[name="email"]',
  ]

  it.each(selector)(`Element %s is visible`, selector => {
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    cy.get(selector).should('be.visible')
  })
})
