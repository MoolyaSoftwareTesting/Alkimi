// cypress/support/commands.js
import 'cypress-mailosaur'
import { Locators } from "../support/locators";



Cypress.Commands.add('visitAlkimi', () => {
  const url = Cypress.env('url');
  cy.visit(url);
  cy.contains('button', 'Accept Only Essential Cookies').click();
  cy.contains('Log In').click();
});

Cypress.Commands.add('login', ({ email, password }) => {
  cy.get(Locators.email).type(email);
  cy.get(Locators.password).type(password);
  cy.get(Locators.loginButton).click();
  cy.contains(Locators.loggedIn, { timeout: 20000 }).should('be.visible').then(() => {
    cy.screenshot(Locators.loggedIn);
  });
});
/*
Cypress.Commands.add('connectToMetaMask', () => {
  cy.window().then((win) => {
    if (win.ethereum) {
      win.ethereum.enable();
    } else {
      cy.log('MetaMask not detected.');
    }
  });
});
*/

Cypress.Commands.add('setupMetamask', () => {
  const mnemonic = 'gesture rather oblige force address fellow thumb nose hedgehog code snippets include function setAddress'()
   {
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
    };
});