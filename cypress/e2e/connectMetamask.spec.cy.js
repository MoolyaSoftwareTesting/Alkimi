describe('Connect Metamask', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.wait(1000);
    const url = Cypress.env('url');
    // Visit the URL before each test
    cy.visit(url);
    cy.contains('button', 'Accept Only Essential Cookies').click();
    cy.contains('Log In').click();
    cy.fixture('testdata').then((data) => {
      cy.get('#email-input').type(data.user.email);
      cy.get('#password-input').type(data.user.password);
      cy.contains('button', 'Log in').click();
    });
  });
  it('should connect and link Metamask wallet', () => {
    cy.wait(1000); // Wait for Metamask prompt to appear
    cy.contains("Connect Wallet").click();
    cy.contains('MetaMask').click();

  });
});