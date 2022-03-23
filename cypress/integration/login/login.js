import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

Given('A user visit login page', () => {
  cy.visit(Cypress.env('sauceDemo'))
})

When('A user enter username {string}', username => {
  cy.get('#user-name').type(username)
})

When('A user enter incorrect credentials', table => {
  table.hashes().forEach(row => {
    cy.get('#user-name').type(row.username)
    cy.get('#password').type(row.password)
  })
})

And('A user enter password {string}', password => {
  cy.get('#password').type(password)
})

And('A user clicks on login button', () => {
  cy.get('#login-button').click()
})

Then('A user will be logged in', () => {
  cy.url().should('contain', '/inventory.html')
})

Then('A user will receive {string} message', erroMsg => {
  cy.get('h3').should('have.text', erroMsg)
})
