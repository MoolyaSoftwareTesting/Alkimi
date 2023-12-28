describe('Change Password', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.wait(1000);
    const url = Cypress.env('url');
    // Visit the URL before each test
    cy.visit(url);
    cy.contains('button', 'Accept Only Essential Cookies').click();
    cy.contains('Log In').click();
  });

  it('should change the account password', () => {
    cy.fixture('testdata').then((data) => {
      cy.get('#email-input').type(data.user.email);
      cy.get('#password-input').type(data.user.password);
      cy.contains('button', 'Log in').click();

      cy.contains('Logged in', { timeout: 20000 }).should('be.visible').then(() => {
        cy.screenshot('Logged in');
      });
      cy.wait(1000);
      cy.contains('New Password').scrollIntoView();
      cy.get("input[placeholder='New Password']").type(data.user.newPassword);
      cy.get("input[placeholder='Confirm Password']").type(data.user.newPassword);
      cy.wait(1000); // wait for server response before next command
      cy.contains('button', 'Change password').click();
      cy.wait(1000);
      cy.contains('user kyc not verified', { timeout: 20000 }).should('be.visible').then(() => {
        cy.screenshot('change password unsuccessful');
      });
    });
  });
});
