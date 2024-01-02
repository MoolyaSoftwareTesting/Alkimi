describe('Connect Metamask', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visitAlkimi();
    cy.fixture('testdata').then((data) => {
      cy.login({ email: data.user.email, password: data.user.password });
    });
  });
  it('should connect and link Metamask wallet', () => {
    cy.wait(1000); // Wait for Metamask prompt to appear
    cy.contains("Connect Wallet").click();
    cy.contains('MetaMask', { timeout: 20000 }).click();
  });
})

