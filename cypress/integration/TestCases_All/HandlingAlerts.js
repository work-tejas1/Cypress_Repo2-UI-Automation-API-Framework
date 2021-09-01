/// <reference types="cypress" />

describe('Handling Browser Alerts', () => {

    it('Handling alerts then assert message', () => {
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get("#button1").click() // auto handled
        cy.on("window:alert" , (alertText) => {
            expect(alertText).to.equal("I am an alert box!")
        })
    })

    it('Handling alerts FALSE then assert message', () => {
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get("#button4").click() 
        cy.on("window:confirm" , (alertText) => {
            return false; // true : to confirm OK
        })
        cy.get("#confirm-alert-text").contains("You pressed Cancel!")
    })

    it('Handling alerts using stub', () => {
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        const stub = cy.stub()
        cy.on("window:confirm" , stub)
        cy.get("#button4").click().then(() =>{
            expect(stub.getCall(0)).to.be.calledWith("Press a button!")
        })
    })

})