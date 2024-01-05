## Getting Started
- **Install dependencies**: Run 'npm install' to install project dependiences.
- **Install Cypress**: Run 'npx install Cypress --save -dev'
- **Run Cypress tests Locally**: Execute 'npx cypress open' to open Cypress Test Runner.
- **To run cypress test individually through terminal**: npx cypress run --spec "cypress/e2e/activateAccount.spec.cy.js"   
  
## Package.json
 - **Test Script:** The 'test' script is configured to run 'node run-tests.js'.
 - The 'package.json' file contains essential information about the project, including scripts for executing javascript

## Folder Structure
- **fixtures/**: Test data files.
- **e2e/**: Cypress test files.
- **Screenshots/**: stores screenshots of executed tests.
- **Videos/**: Stores complete execut video.
- **support/**: Contains commands.js,e2e.js and locators.js files.
* **commands.js**: Custom commands for common operations like login etc.,
* **locators.js** : Page object model pattern implementation using page objects concept.
  
## Email Testing with Mailosaur
For email testing, have used Mailosaur to handle test emails.Ensure the following:
- **Mailosaur Account**: Sign up for a Mailosaur account and obtain your API key.
- **Update Cypress Config**: Update your cypress.config.js file with your Mailosaur API key and server id.

## Troubleshooting
- **issue**: Tests fail due to an email already existing
- **Solution**: update 'email' in 'fixture/testdata.json' and 'testEmail' in 'cypress.config.js' files.
- **Note**: For emails, the domain is [@gadx3q6t.mailosaur.net], and anything before it should be unique. The value of 'email' and 'testEmail' should be same.

## Achievements and Challenges
- Successfully automated the creation of a new account.
- Asserted email verification by logging in, overcoming the absence of UI for the "Verify Now" button.
- Initiated the connection with the Metamask wallet, up to the point where the Metamask extension opens.
- Currently, the password change functionality is failing due to known issue (KYC failure).This prevents successful password changes. Therefore, have Automated Negative Scenarios
