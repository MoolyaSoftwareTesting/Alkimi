/**Issue: Currently, the password change functionality is failing due to known issue (KYC failure)
 * This prevents successful password changes. Therefore, have Automated Negative Scenarios
 */

import { Locators } from "../support/locators";

describe('Change Password', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    // Visit the URL before each test
    cy.visitAlkimi();
    cy.fixture('testdata').then((data) => {
      cy.login({ email: data.user.email, password: data.user.password });
    });
  });

  it('should display error message for password change failure', () => {
    cy.fixture('testdata').then((data) => {
      cy.get(Locators.newPassword, { timeout: 10000 }).scrollIntoView();
      cy.get(Locators.newPassword).type(data.user.newPassword);
      cy.get(Locators.confirmPassword).type(data.user.newPassword);
      cy.contains(Locators.changePassword, { timeout: 10000 }).click();
      cy.contains(Locators.verificationMessage, { timeout: 1000 }).should('be.visible').then(() => {
        cy.screenshot('change password unsuccessful');
      });
    });
  });

  it('should display error for Mismatched Passwords', () => {
    cy.fixture('testdata').then((data) => {
      cy.get(Locators.newPassword, { timeout: 10000 }).scrollIntoView();
      cy.get(Locators.newPassword).type('Password@12');
      cy.get(Locators.confirmPassword).type('Pass@1');
      cy.contains(Locators.changePassword, { timeout: 10000 }).click();
      cy.contains('Passwords do not match', { timeout: 1000 }).should('be.visible').then(() => {
        cy.screenshot();
      });
    });
  });

  it('should short password', () => {
    cy.fixture('testdata').then((data) => {
      cy.get(Locators.newPassword, { timeout: 10000 }).scrollIntoView();
      cy.get(Locators.newPassword).type('pass');
      cy.get(Locators.confirmPassword).type('pass');
      cy.contains(Locators.changePassword, { timeout: 10000 }).click();
      cy.contains('Password must be at least 6 characters', { timeout: 1000 }).should('be.visible').then(() => {
        cy.screenshot();
      });
    });
  });
});
