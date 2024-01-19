const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "b75wpj",
  video: true,
  browser: "chrome",
  headless: false,
  chromeWebSecurity: true,
  chromeArgs: [
    "--disable-extensions-except= C:/Users/Admin/Alkimi/MetaMask",
    "--load-extension=C:/Users/Admin/Alkimi/MetaMask"
  ],
  viewPortWidth: 1920,
  viewPortHeight: 1080,

  env: {
    url: 'https://qa.dprtuccdijrqp.amplifyapp.com',
    MAILOSAUR_API_KEY: 'Q5eJcU7OfSmi0e73SAb809EtgM2pzR2p',
    serverId: 'gadx3q6t',
    testEmail: 'anything20@gadx3q6t.mailosaur.net'
  },

  e2e: {
    setupNodeEvents(on, config) {
      // require('cypress-grep/src/plugin')(config)
      on('before:browser:launch', (browser, launchOptions) => {
        launchOptions.extensions.push('C:/Users/Admin/Alkimi/MetaMask')
        return launchOptions
      })
    }
  }
})
