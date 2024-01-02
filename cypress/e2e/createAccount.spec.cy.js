import { Locators } from "../support/locators";

describe('Create Account', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    // Visit the URL before each test
    cy.visitAlkimi();
  });

  it('should create a new account', () => {
    cy.contains(Locators.signupText).click();
    cy.fixture('testdata').then((data) => {
      cy.get(Locators.fullName).type(data.user.name);
      cy.get(Locators.registerEmail).type(data.user.email);
      cy.get(Locators.Password).type(data.user.password);
      cy.get(Locators.reEnterPassword).type(data.user.password);
      cy.get(Locators.checkBox, { timeout: 10000 }).click();
      cy.get(Locators.signInButton).click();
      //Assertion
      cy.url().should("include", "/login");
    })
  })
})