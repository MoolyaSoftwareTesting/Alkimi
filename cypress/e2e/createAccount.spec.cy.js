describe('Create Account', () => {
  it('should create a new account', () => {
    const url = Cypress.env('url');
    cy.visit(url);
    cy.contains('button', 'Accept Only Essential Cookies').click();
    cy.contains('Log In').click();
    cy.contains('Sign up').click();
    cy.fixture('testdata').then((data) => {
      cy.get("input[placeholder='Full name']").type(data.user.name);
      cy.get("input[placeholder='Email']").type(data.user.email);
      cy.get("input[name='password']").type(data.user.password);
      cy.get("input[name='confirm-password']").type(data.user.password);
      cy.wait(500);
      cy.get('input[name="terms"]').click();
      cy.get('button[type="submit"]').click();
      // Assert that the login page is visible
      cy.wait(5000);
      cy.screenshot()
    })
  })
})