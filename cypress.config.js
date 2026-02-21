const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    application_URL: 'https://www.saucedemo.com/',
  },

  allowCypressEnv: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportFilename: 'index',
    overwrite: true,
    autoOpen: false,
    saveAllAttempts: false,
    embeddedScreenshots: true,
    inlineAssets: true,
    showPassed: true,
    charts: true,
    reportPageTitle: 'Sauce Demo UI tests',
    html: true,
    json: false,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;

    },
  },
});
