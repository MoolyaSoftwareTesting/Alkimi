##Getting Started
- **Install dependencies**:
npm install

- **Run Cypress tests**:
npx cypress open
- **To run cypress test individually**:
npx cypress run --spec "cypress/e2e/activateAccount.spec.cy.js"   
- **To run e2e test**:
node run-tests.js 

## Folder Structure
- **fixtures/**: Test data files.
- **e2e/**: Cypress test files.

## Email Testing with Mailosaur
For email testing, have used Mailosaur to handle test emails.
- **Ensure the following**:
- **Mailosaur Account**: Sign up for a Mailosaur account and obtain your API key.
- **Update Cypress Config**: Update your cypress.config.js file with your 

## Troubleshooting
- **issue:** Tests fail due to an email already existing

- **Solution:** update 'email' in 'fixture/testdata.json' and 'testEmail' in 'cypress.config.js' files.
- **Note**: For emails, the domain is [@gadx3q6t.mailosaur.net], and anything before it should be unique. The value of 'email' and 'testEmail' should be same.
