/**Issue: Currently, the password change functionality is failing due to known issue (KYC failure)
 * This prevents successful password changes. Therefore, have Automated Negative Scenarios
 */
import { Locators } from "../support/locators";

describe('Change Password', () => {
  beforeEach(() => {
    // Visit Alkimi and login using test data
    cy.visitAlkimi();
    cy.fixture('testdata').then((data) => {
      cy.login({ email: data.user.email, password: data.user.password });
    });
  });

  it('should display error message for password change failure', () => {
    cy.fixture('testdata').then((data) => {
      cy.scrollIntoViewBySelector(Locators.newPassword);
      cy.typeIntoInput(Locators.newPassword, data.user.newPassword);
      cy.typeIntoInput(Locators.confirmPassword, data.user.newPassword);
      cy.clickElementWithText(Locators.changePassword);
      cy.contains(Locators.verificationMessage, { timeout: 10000 }).should('be.visible').then(() => {
        cy.screenshot('change password unsuccessful');
      });
    });
  });

  it('should display error message for Mismatched Passwords', () => {
    cy.fixture('testdata').then((data) => {
      cy.scrollIntoViewBySelector(Locators.newPassword);
      cy.typeIntoInput(Locators.newPassword, 'Password@12');
      cy.typeIntoInput(Locators.confirmPassword, 'Pass@1');
      cy.clickElementWithText(Locators.changePassword);
      cy.contains('Passwords do not match', { timeout: 10000 }).should('be.visible').then(() => {
        cy.screenshot('mismatched password');
      });
    });
  });

  it('should display error message for short password', () => {
    cy.fixture('testdata').then((data) => {
      cy.scrollIntoViewBySelector(Locators.newPassword);
      cy.typeIntoInput(Locators.newPassword, 'pass');
      cy.typeIntoInput(Locators.confirmPassword, 'pass');
      cy.clickElementWithText(Locators.changePassword);
      cy.contains('Password must be at least 6 characters', { timeout: 1000 }).should('be.visible').then(() => {
        cy.screenshot('short password');
      });
    });
  });
});
