/// <reference types="cypress" />

describe('Itrate each item, Alias, invoke', () => {
    //  https://docs.cypress.io/api/commands/each#DOM-Elements

    it('Iterate over elements', function () {
        cy.visit("https://automationteststore.com/")
        cy.get(".prdocutname").each(($el, index, $list) => {
            cy.log("Index: " + index + ":" + $el.text())
        })
    })

    it('Iterate over elements with IF condition', function () {
        cy.visit("https://automationteststore.com/")
        cy.get(".prdocutname").each(($el, index, $list) => {
            if ($el.text() === 'Flash Bronzer Body Gel') {
                // wrap this element so we can use cypress commands on it
                cy.wrap($el).click()
                cy.url().should("contain", "product_id=67")
            } else {
                cy.log("Product not availabe")
            }
        })
    })

    it('Alias and invoke', function () {
        // https://docs.cypress.io/guides/core-concepts/variables-and-aliases#Aliases
        cy.visit("https://automationteststore.com/index.php?rt=product/category&path=52")
        cy.get(".fixed .prdocutname").eq(0).invoke("text").as("productName")
        cy.get("@productName").should("have.length.greaterThan", 5)
        cy.get("@productName").its("length").should("be.greaterThan", 5)
        cy.get("@productName").should("deep.equal", "Seaweed Conditioner")
    })

    it('Calculate total of normal and sale products', function () {

        cy.visit("https://automationteststore.com/")
        //cy.get(".thumbnail").as("allProducts")
        // cy.get("@allProducts").find(".oneprice").each(($el, index, $list) => {
        //     cy.log($el.text())
        cy.get(".thumbnail").find(".oneprice").invoke("text").as("itemPriceNormal")
        //cy.get(".thumbnail").find(".pricenew").invoke("text").as("itemPriceSale") //use for sale item
        cy.get("@itemPriceNormal").then(($linkText) => {
            var itemPriceNormal = $linkText.split("$")
            var itemPriceTotalNormal = 0;
            for (var i = 0; i < itemPriceNormal.length; i++) {
                //cy.log(itemPriceNormal[i])
                itemPriceTotalNormal += Number(itemPriceNormal[i])
            }
            //cy.log("Sale Item Price : = " + itemPriceTotalNormal)
            expect(itemPriceTotalNormal).is.equal(213.7)
        })
    })

})