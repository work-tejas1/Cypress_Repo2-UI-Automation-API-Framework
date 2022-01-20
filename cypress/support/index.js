// https://on.cypress.io/configuration
const app = window.top
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style')
  style.innerHTML = '.command-name-request, .command-name-xhr { display: none }'
  style.setAttribute('data-hide-command-log-request', '')
  app.document.head.appendChild(style)
}

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-wait-until'
import 'cypress-dark'
import 'cypress-xpath'

// Alternatively you can use CommonJS syntax:
// require('./commands')
// require('cypress-xpath')
//require('cypress-dark')
