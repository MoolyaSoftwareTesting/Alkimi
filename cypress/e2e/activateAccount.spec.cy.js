describe('Email', () => {
  before(() => {
    const MAILOSAUR_API_KEY = Cypress.env('MAILOSAUR_API_KEY');
    Cypress.env('CYPRESS_MAILOSAUR_API_KEY', MAILOSAUR_API_KEY);
  })
  let verifyEmailLink;
  const serverId = Cypress.env('serverId');
  const testEmail = Cypress.env('testEmail');

  it('should have the correct subject', () => {
    cy.mailosaurGetMessage(serverId, {
      sentTo: testEmail
    }).then(email => {
      // Assert that the mail is related to Alkimi
      expect(email.subject).to.equal('Verify your account for Alkimi SoftStaking');
      verifyEmailLink = email.text.links[1];
      const firstLink = email.html.links[0]
      cy.visit(firstLink.href);
      cy.screenshot()
    });
  });

  it('Assert email verification', () => {
    //Since clicking "Verify Now" may not display UI, asserting email verification vio login
    cy.wait(10000);
    cy.visitAlkimi();
    cy.fixture('testdata').then((data) => {
      //Logging in and checking if the email is verified via login
      cy.login({ email: data.user.email, password: data.user.password });
      cy.contains('Email Verified', { timeout: 20000 }).should('be.visible');
    });
  })

})
