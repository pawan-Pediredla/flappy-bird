const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:9000', // Adjust this to your app's URL
    supportFile: 'cypress/support/e2e.js',
  },
});
