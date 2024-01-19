const cypress = require('cypress');
async function runTests() {
  try {
    const specs = [
      'cypress/e2e/createAccount.spec.cy.js',
      'cypress/e2e/activateAccount.spec.cy.js',
      'cypress/e2e/connectMetamask.spec.cy.js',
      'cypress/e2e/changePassword.spec.cy.js'
    ];
    const results = await cypress.run({
      spec: specs.join(','),
    });
    console.log(results);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}
runTests();









