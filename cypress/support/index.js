// https://on.cypress.io/configuration
Cypress.Server.defaults({
  delay: 0,
  force404: false,
  ignore: (xhr) => {
    // handle custom logic for whitelisting
    return true;
  }
})


// Import commands.js using ES2015 syntax:
import './commands';
import 'cypress-wait-until';
import 'cypress-dark';

// Alternatively you can use CommonJS syntax:
// require('./commands')
// require('cypress-xpath')
//require('cypress-dark')