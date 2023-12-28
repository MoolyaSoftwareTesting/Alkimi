const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "b75wpj",
  video: true,
  chromeWebSecurity: true,
  viewPortWidth: 1920,
  viewPortHeight: 1080,
 
  env: {
    url: 'https://qa.dprtuccdijrqp.amplifyapp.com',
    MAILOSAUR_API_KEY: 'Q5eJcU7OfSmi0e73SAb809EtgM2pzR2p',
    serverId: 'gadx3q6t',
    testEmail: 'anything3@gadx3q6t.mailosaur.net'
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
