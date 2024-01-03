import { Locators } from "../support/locators";

describe('Create Account', () => {
  beforeEach(() => {
    // Visit the URL before each test
    cy.visitAlkimi();
  });

  it('should create a new account', () => {
    //Using the custom command to click an element with specific text
    cy.clickElementWithText(Locators.signupText);
    cy.fixture('testdata').then((data) => {
      // Using the custom command to type into an input field
      cy.typeIntoInput(Locators.fullName, data.user.name);
      cy.typeIntoInput(Locators.registerEmail, data.user.email);
      cy.typeIntoInput(Locators.Password, data.user.password);
      cy.typeIntoInput(Locators.reEnterPassword, data.user.password);
      cy.clickElementWithLocator(Locators.checkBox, { timeout: 10000 });
      cy.clickElementWithLocator(Locators.signInButton);
      //Assertion
      cy.url().should("include", "/login");
    })
  })
})