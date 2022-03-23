const report = require('multiple-cucumber-html-reporter')

report.generate({
  jsonDir: 'cypress/cucumber-json',
  reportPath: './reports/cucumber-html-report.html',
  metadata: {
    browser: {
      name: 'chrome',
      version: '96',
    },
    device: 'Local Device Personal',
    platform: {
      name: 'windows',
      version: '10 latest',
    },
  },
})
