/// <reference types="cypress" />

describe('fail status code handle', () => {
  it('Fail status code handing', function () {
    cy.clearCookies()
    cy.visit(
      'https://www.pyszne.pl/en/menu/test-restaurant-selenium?showTestRestaurants',
      { failOnStatusCode: false }
    )
  })
})
