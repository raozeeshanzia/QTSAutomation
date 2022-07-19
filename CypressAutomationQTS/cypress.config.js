const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/examples/*.js",
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 10000,
  },
  env: {
    base_url: 'https://quotes.toscrape.com/'   
  }
 
});
