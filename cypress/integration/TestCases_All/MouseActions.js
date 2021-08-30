/// <reference types="cypress" />

describe('MouseActions Test', () => {
    //https://docs.cypress.io/api/commands/trigger#Mouse-Events
    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com/")
        cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click()
    })

    it('Scroll Element into View', function () {
        cy.visit("https://webdriveruniversity.com/")
        cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click()
    })

    it('Drag and Drop Element', function () {
        cy.get("#draggable").trigger("mousedown", { button: 1 })
        cy.get("#droppable").trigger("mousemove").trigger("mouseup", { force: true })
    })

    it('Double Click', function () {
        cy.get("#double-click").should("have.class", "div-double-click").then(() => {
            cy.get("#double-click").dblclick().should("have.class", "div-double-click double")
        })
    })

    it('Click and hold mouse button', function () {
        cy.get("#click-box").trigger("mousedown", { button: 1 }).then(($element) => {
            expect($element).to.have.css("background-color", "rgb(0, 255, 0)")
            //Resource: https://i.ibb.co/yfqg7Kw/background-Color.jpg
        })
    })

})