const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // Update based on your dev server
    supportFile: "cypress/support/e2e.js",
  },
});
