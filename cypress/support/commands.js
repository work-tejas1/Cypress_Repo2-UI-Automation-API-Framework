Cypress.Commands.add('selectProduct', productname => {
    cy.get(".prdocutname").each(($el, index, $list) => {
        if ($el.text() === productname) {
            cy.wrap($el).click()
            cy.url().should("contain", "product_id")
        }
    })
});

Cypress.Commands.add('webDriverUni_ContactUs', (firstName, lastName, emailValue, $elementLocator) => {
    cy.get("[name='first_name']").type(firstName, { delay: 30 })
    cy.get("[name='last_name']").type(lastName)
    cy.get($elementLocator).type(emailValue)
});

Cypress.Commands.add('addProductToBasket', productname => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        if ($el.text() === productname) {
            cy.log($el.text())
            cy.get(".productcart").eq(index).click()
        }
    })
});


