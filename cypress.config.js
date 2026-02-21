const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env:{
    application_URL: 'https://www.saucedemo.com/',
  },

  allowCypressEnv: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir:'cypress/reports/sauce-demo-ui-report',
    overwrite:true,
    autoOpen:false,
    saveAllAttempts:false,
    embeddedScreenshots:true,
    inlineAssets:true,
    showPassed:true,
    charts: true,
    reportPageTitle: 'Sauce Demo UI tests',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
      
    },
  },
});
