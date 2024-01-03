describe('Connect Metamask', () => {
  beforeEach(() => {
    cy.visitAlkimi();
    cy.fixture('testdata').then((data) => {
      cy.login({ email: data.user.email, password: data.user.password });
    });
  });

  it('should connect and link Metamask wallet', () => {
    cy.contains("Connect Wallet").click();
    cy.contains('MetaMask', { timeout: 20000 }).click();
  });
})

