before(() => {
  const MAILOSAUR_API_KEY = Cypress.env('MAILOSAUR_API_KEY');
  Cypress.env('CYPRESS_MAILOSAUR_API_KEY', MAILOSAUR_API_KEY);
})
describe('Email', () => {
  let verifyEmailLink;
  const serverId = Cypress.env('serverId');
  const testEmail = Cypress.env('testEmail');

  it('should have the correct subject', () => {
    cy.mailosaurGetMessage(serverId, {
      sentTo: testEmail
    }).then(email => {
      // Assert that the mail is related to Alkimi
      expect(email.subject).to.equal('Verify your account for Alkimi SoftStaking');
      cy.log('body:', email);
      console.log('body:', email);
      verifyEmailLink = email.text.links[1];
      cy.log('verifyEmailLink:', verifyEmailLink);
      console.log('verifyEmailLink:', verifyEmailLink);
      console.log(email.html.links.length);
      const firstLink = email.html.links[0]
      cy.log(firstLink);
      cy.visit(firstLink.href);
      cy.wait(5000);
      cy.screenshot()
    });
  });

})
