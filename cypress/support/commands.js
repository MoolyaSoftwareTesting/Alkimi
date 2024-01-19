import 'cypress-mailosaur'
import { Locators } from "../support/locators";

Cypress.Commands.add('visitAlkimi', () => {
  const url = Cypress.env('url');
  cy.visit(url);
  cy.clickElementWithText(Locators.acceptCookiesButton);
  cy.clickElementWithText(Locators.loginText);
});

Cypress.Commands.add('clickElementWithText', (text) => {
  cy.contains(text).click();
});

Cypress.Commands.add('clickElementWithLocator', (selector) => {
  cy.get(selector).click();
});

Cypress.Commands.add('scrollIntoViewBySelector', (selector, timeout = 10000) => {
  cy.get(selector, { timeout }).scrollIntoView();
})

Cypress.Commands.add('typeIntoInput', (selector, text) => {
  cy.get(selector).type(text);
});

Cypress.Commands.add('login', ({ email, password }) => {
  cy.typeIntoInput(Locators.email, email);
  cy.typeIntoInput(Locators.password, password);
  cy.clickElementWithLocator(Locators.loginButton);
  cy.contains(Locators.loggedIn, { timeout: 20000 }).should('be.visible').then(() => {
    cy.screenshot(Locators.loggedIn);
  });
});

Cypress.Commands.add('setupMetamask', () => {
  if (!localStorage.getItem('walletAddress')) {
    cy.visit('http://localhost:3000');
    cy.get('.container > .button').click();
    cy.get('#password').type('test');
    cy.get('#confirmPassword').type('test');
    cy.get('.create').click();
  }
  else {
    const address = localStorage.getItem('walletAddress');
    cy.viewport(320, 568);
    cy.visit('http://localhost:3000');
    cy.get('.container > .button').click();
    cy.get('#metamask-mnemonic').type(address);
    cy.get('#metamask-password').type('test');
    cy.get('.import').click();
  }
});