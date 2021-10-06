//  https://webdriveruniversity.com/Contact-Us/contactus.html

class ContactUs {

   firstName() {
      return cy.get('[name="first_name"]')
   }

   lastName() {
      return cy.get('[name="last_name"]')
   }

   email() {
      return cy.xpath('//input[@name="email"]')
   }

   message() {
      return cy.get("[name=message]", { timeout: 12000 })
   }

}

export default ContactUs;
