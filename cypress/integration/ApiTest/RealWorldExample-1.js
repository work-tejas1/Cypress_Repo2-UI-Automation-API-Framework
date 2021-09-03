/// <reference types="cypress" />

describe("Signup", () => {
    let randomString = Math.random().toString(36).substring(2);

    it("Test valid signup", () => {
        cy.visit("http://localhost:4200/");
        cy.get(".nav").contains("Sign up").click();
        cy.get("[placeholder='Username']").type("Auto" + randomString);
        cy.get("[placeholder='Email']").type("Auto_email" + randomString + "@gmail.com");
        cy.get("[placeholder='Password']").type("Password1");
        cy.get("button").contains("Sign up").click();
    })

    it("Test valid signup and body parameters", () => {
        cy.intercept("POST", " **/users").as("newUser");
        cy.visit("http://localhost:4200/");
        cy.get(".nav").contains("Sign up").click();
        cy.get("[placeholder='Username']").type("Auto" + randomString);
        cy.get("[placeholder='Email']").type("Auto_email" + randomString + "@gmail.com");
        cy.get("[placeholder='Password']").type("Password1");
        cy.get("button").contains("Sign up").click();

        cy.wait("@newUser")
        cy.get("@newUser").should((xhr) => {
            expect(xhr.status).to.eq(200);
            expect(xhr.request.body.user.username).to.eq("Auto" + randomString);
            expect(xhr.request.body.user.email).to.eq("Auto_email" + randomString + "@gmail.com");
        })
    })
})
